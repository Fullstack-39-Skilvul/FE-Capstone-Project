import { Button, Modal, Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDataPasien,
  getDataPasien,
  updateDataPasien,
} from "../../redux/action/pasienAction";
import { Toaster } from "react-hot-toast";

function Pasien() {
  const dispatch = useDispatch();

  const { isLoading, pasiens } = useSelector((state) => state.pasien);

  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [isEdit, setIsEdit] = useState("");
  const [editPasien, setEditPasien] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [newValue, setNewValue] = useState({
    namaPasien: "",
    email: "",
    alamat: "",
    noTelepon: "",
  });

  useEffect(() => {
    dispatch(getDataPasien());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredPasiens = pasiens.data?.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchKeyword.toLowerCase())
    )
  );

  const handleEdit = (id) => {
    const selectPasien = pasiens.data?.find((item) => item._id === id);
    setEditPasien(selectPasien);

    setNewValue({
      namaPasien: selectPasien ? selectPasien.namaPasien : "",
      email: selectPasien ? selectPasien.email : "",
      alamat: selectPasien ? selectPasien.alamat : "",
      noTelepon: selectPasien ? selectPasien.noTelepon : "",
    });

    setOpenModal(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await dispatch(updateDataPasien(editPasien._id, newValue));
    dispatch(getDataPasien());
    setOpenModal(false);
    setIsEdit("");
    setEditPasien(null);
  };

  const handleDelete = async (id) => {
    setEditPasien(id);
    setOpenModalDelete(true);
  };

  const handleAcceptDelete = async () => {
    await dispatch(deleteDataPasien(editPasien));
    dispatch(getDataPasien());
    setOpenModalDelete(false);
  };

  return (
    <div>
      <Toaster />
      <div className="text-sky-500 font-semibold text-2xl">Data Pasien</div>
      <div>
        <div className="flex justify-between items-center mt-5">
          <div></div>
          <input
            className="border h-8 rounded text-sm"
            type="search"
            placeholder="Cari"
            value={searchKeyword}
            onChange={handleSearch}
          />
        </div>
        <div className="relative max-h-80 overflow-x-auto shadow-md sm:rounded-lg mt-5">
          {isLoading ? (
            <div className=" text-center overflow-hidden py-10 flex justify-center items-center">
              <Spinner />
            </div>
          ) : (
            <table className="w-full overflow-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs sticky top-0 z-20 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nama Pasien
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Alamat
                  </th>
                  <th scope="col" className="px-6 py-3">
                    No Telepon
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredPasiens?.map((item) => (
                  <tr
                    key={item._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.namaPasien}
                    </th>
                    <td className="px-6 py-4">{item.email}</td>
                    <td className="px-6 py-4">{item.alamat}</td>
                    <td className="px-6 py-4">{item.noTelepon}</td>
                    <td className="px-6 py-4 gap-2 flex items-center">
                      <a
                        onClick={() => handleEdit(item._id)}
                        href="#"
                        className="font-medium bg-yellow-200 text-blue-950 py-1 px-2 rounded-lg"
                      >
                        Update
                      </a>
                      <a
                        onClick={() => handleDelete(item._id)}
                        href="#"
                        className="font-medium bg-red-400 text-white py-1 px-2 rounded-lg"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* modal */}
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Update Data Pasien</Modal.Header>
          <Modal.Body>
            <form action="" className="flex flex-col text-sm gap-2">
              <label htmlFor="nama">Nama Pasien</label>
              <input
                className="border rounded-lg"
                type="text"
                placeholder="Nama Pasien"
                value={newValue.namaPasien}
                onChange={(e) =>
                  setNewValue({ ...newValue, namaPasien: e.target.value })
                }
              />

              <label htmlFor="email">Email</label>
              <input
                className="border rounded-lg"
                type="email"
                placeholder="Email"
                value={newValue.email}
                onChange={(e) =>
                  setNewValue({ ...newValue, email: e.target.value })
                }
              />

              <label htmlFor="alamat">Alamat</label>
              <input
                className="border rounded-lg"
                type="text"
                placeholder="Alamat"
                value={newValue.alamat}
                onChange={(e) =>
                  setNewValue({ ...newValue, alamat: e.target.value })
                }
              />

              <label htmlFor="noTelepon">No Telepon</label>
              <input
                className="border rounded-lg"
                type="number"
                placeholder="No Telepon"
                value={newValue.noTelepon}
                onChange={(e) =>
                  setNewValue({ ...newValue, noTelepon: e.target.value })
                }
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="bg-sky-500" onClick={handleUpdate}>
              Update
            </Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
        {/* akhir modal */}

        {/* modal konfirmasi delete */}
        <Modal show={openModalDelete} onClose={() => setOpenModalDelete(false)}>
          <Modal.Header>Hapus Data Pasien</Modal.Header>
          <Modal.Body>
            <p>Apakah Anda yakin ingin menghapus data pasien ini?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="bg-red-500 text-white"
              onClick={handleAcceptDelete}
            >
              Ya, Hapus
            </Button>
            <Button
              className="bg-sky-500"
              onClick={() => setOpenModalDelete(false)}
            >
              Batal
            </Button>
          </Modal.Footer>
        </Modal>
        {/* akhir modal */}
      </div>
    </div>
  );
}

export default Pasien;

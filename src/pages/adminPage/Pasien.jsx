import { Button, Modal, Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDataPasien,
  getDataPasien,
  updateDataPasien,
} from "../../redux/action/pasienAction";

function Pasien() {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState("");
  const [editPasien, setEditPasien] = useState(null);

  // Tambahkan state newValue untuk menyimpan nilai yang akan disimpan
  const [newValue, setNewValue] = useState({
    namaPasien: "",
    email: "",
    alamat: "",
    noTelepon: "",
  });

  const { isLoading, pasiens } = useSelector((state) => state.pasien);

  // console.log(pasiens);
  useEffect(() => {
    dispatch(getDataPasien());
  }, [dispatch]);

  const handleEdit = (id) => {
    const selectPasien = pasiens.data?.find((item) => item._id === id);
    setEditPasien(selectPasien);

    // Set nilai awal ke dalam state newValue
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
    dispatch(getDataPasien()); // Ambil data pasien setelah pembaruan
    setOpenModal(false);
    setIsEdit("");
    setEditPasien(null);
  };

  const handleDelete = async (id) => {
    await dispatch(deleteDataPasien(id));
    dispatch(getDataPasien()); // Ambil data pasien setelah pembaruan
  };

  return (
    <div>
      <div className="text-sky-500 font-semibold text-2xl">Data Pasien</div>
      <div>
        <div className="flex justify-between items-center mt-5">
          <div></div>
          <input
            className="border h-8 rounded text-sm"
            type="search"
            placeholder="Cari"
          />
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
              {pasiens.data?.map((item) => (
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
            <Button onClick={handleUpdate}>I accept</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
        {/* akhir modal */}
      </div>
    </div>
  );
}

export default Pasien;

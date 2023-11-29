import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createDataSpesialisasi,
  deleteDataSpesialisasi,
  getDataSpesialisasi,
  updateDataSpesialisasi,
} from "../../redux/action/spesialisasiAction";
import { Modal, Button } from "flowbite-react";

function Spesialis() {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [editSpesialisasi, setEditSpesialisasi] = useState("");
  const [newSpesialisasi, setNewSpesialisasi] = useState({
    namaSpesialisasi: "",
  });
  const { isLoading, spesialisasis } = useSelector((state) => state.spesialis);

  console.log(spesialisasis.data);

  useEffect(() => {
    dispatch(getDataSpesialisasi());
  }, [dispatch]);

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(createDataSpesialisasi(newSpesialisasi));
    console.log({ newSpesialisasi });
    setNewSpesialisasi({
      namaSpesialisasi: "",
    });
  };

  const handleEdit = (id) => {
    setOpenModal(true);
    const selectSpesialisasi = spesialisasis.data?.find(
      (item) => item._id === id
    );
    setEditSpesialisasi(selectSpesialisasi);
    setNewSpesialisasi({
      namaSpesialisasi: selectSpesialisasi
        ? selectSpesialisasi.namaSpesialisasi
        : "",
    });
  };

  const handleEditAccept = async () => {
    await dispatch(
      updateDataSpesialisasi(editSpesialisasi._id, newSpesialisasi)
    );
    dispatch(getDataSpesialisasi());
    setOpenModal(false);
    setNewSpesialisasi({ namaSpesialisasi: "" });
  };

  const handleDelete = async (id) => {
    console.log(id);
    await dispatch(deleteDataSpesialisasi(id));
    dispatch(getDataSpesialisasi());
  };

  return (
    <div>
      <div className="text-sky-500 font-semibold text-2xl">Data Spesialis</div>
      <div>
        <div className="flex justify-between items-center mt-5">
          <div>
            <form action="" className="gap-2 flex">
              <input
                className="border h-8 rounded text-sm"
                type="search"
                placeholder="Input spesialis"
                value={newSpesialisasi.namaSpesialisasi}
                onChange={(e) =>
                  setNewSpesialisasi({
                    ...newSpesialisasi,
                    namaSpesialisasi: e.target.value,
                  })
                }
              />
              <button
                onClick={handleCreate}
                type="submit"
                className="bg-sky-500 text-white py-1 px-2 rounded-lg hover:bg-sky-600"
              >
                Tambah data
              </button>
            </form>
          </div>
          <input
            className="border h-8 rounded text-sm"
            type="search"
            placeholder="Cari"
          />
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
          <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {/* <th scope="col" className="px-6 py-3">
                  No
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Nama Spesialisasi
                </th>
                <th scope="col" className="px-6 py-3 justify-end flex">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {spesialisasis.data?.map((item) => (
                <tr
                  key={item._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.namaSpesialisasi}
                  </th>
                  <td className="px-6 py-4 justify-end gap-2 flex items-center">
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
          <Modal.Header>Update Data Spesialisasi</Modal.Header>
          <Modal.Body>
            <form action="" className="flex flex-col text-sm gap-2">
              <label htmlFor="nama">Nama Spesialisasi</label>
              <input
                className="border rounded-lg"
                type="text"
                placeholder="Nama Spesialisasi"
                value={newSpesialisasi.namaSpesialisasi}
                onChange={(e) =>
                  setNewSpesialisasi({
                    ...newSpesialisasi,
                    namaSpesialisasi: e.target.value,
                  })
                }
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleEditAccept}>I accept</Button>
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

export default Spesialis;

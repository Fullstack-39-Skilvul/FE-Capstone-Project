import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataKonselor,
  createDataKonselor,
} from "../../redux/action/konselorAction";
import { Modal, Button } from "flowbite-react";

function Konselor() {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [newKonselor, setNewKonselor] = useState({
    nama: "",
    email: "",
    alamat: "",
    noTelepon: "",
  });

  const { isLoading, konselors } = useSelector((state) => state.konselor);

  useEffect(() => {
    dispatch(getDataKonselor());
  }, [dispatch]);

  const handleCreate = () => {
    setOpenModal(true);
  };

  const handleCreateData = () => {
    dispatch(createDataKonselor(newKonselor));
    setOpenModal(false);
    setNewKonselor({
      nama: "",
      email: "",
      alamat: "",
      noTelepon: "",
    });
  };

  return (
    <div>
      <div className="text-sky-500 font-semibold text-2xl">Data Konselor</div>
      <div>
        <div className="flex justify-between items-center mt-5">
          <div>
            <button
              onClick={handleCreate}
              className="bg-sky-500 text-white py-1 px-2 rounded-lg hover:bg-sky-600"
            >
              Tambah data
            </button>
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
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  No Telepon
                </th>
                <th scope="col" className="px-6 py-3">
                  Spesialisasi
                </th>
                <th scope="col" className="px-6 py-3">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {konselors.data?.map((item) => (
                <tr
                  key={item._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">
                    <img src={item.avatar} alt="" width={100} />
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.nama}
                  </th>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.noTelepon}</td>
                  <td className="px-6 py-4">
                    {item.spesialisasi.length > 0
                      ? item.spesialisasi[0].namaSpesialisasi
                      : "Belum ditentukan"}
                  </td>
                  <td className="px-6 py-10 gap-2 flex items-center">
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
          <Modal.Header>Create Data Konselor</Modal.Header>
          <Modal.Body>
            <form action="" className="flex flex-col text-sm gap-2">
              <label htmlFor="nama">Nama Konselor</label>
              <input
                className="border rounded-lg"
                type="text"
                placeholder="Nama Konselor"
                value={newKonselor.nama}
                onChange={(e) =>
                  setNewKonselor({ ...newKonselor, nama: e.target.value })
                }
              />

              <label htmlFor="email">Email</label>
              <input
                className="border rounded-lg"
                type="email"
                placeholder="Email"
                value={newKonselor.email}
                onChange={(e) =>
                  setNewKonselor({ ...newKonselor, email: e.target.value })
                }
              />

              {/* <label htmlFor="password">Password</label>
              <input
                className="border rounded-lg"
                type="password"
                placeholder="Password"
                value={newKonselor.password}
                onChange={(e) =>
                  setNewKonselor({ ...newKonselor, password: e.target.value })
                }
              /> */}

              <label htmlFor="alamat">Alamat</label>
              <input
                className="border rounded-lg"
                type="text"
                placeholder="Alamat"
                value={newKonselor.alamat}
                onChange={(e) =>
                  setNewKonselor({ ...newKonselor, alamat: e.target.value })
                }
              />

              <label htmlFor="noTelepon">No Telepon</label>
              <input
                className="border rounded-lg"
                type="number"
                placeholder="No Telepon"
                value={newKonselor.noTelepon}
                onChange={(e) =>
                  setNewKonselor({ ...newKonselor, noTelepon: e.target.value })
                }
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleCreateData}>I accept</Button>
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

export default Konselor;

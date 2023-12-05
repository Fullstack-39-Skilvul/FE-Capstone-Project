import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataKonselor,
  createDataKonselor,
  deleteDataKonselor,
  updateDataKonselor,
} from "../../redux/action/konselorAction";
import { Modal, Button, Spinner } from "flowbite-react";
import { getDataSpesialisasi } from "../../redux/action/spesialisasiAction";
import { Toaster } from "react-hot-toast";
import { loginSuccess } from "../../redux/action/loginAction";

function Konselor() {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editKonselor, setEditKonselor] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedSpesialisasi, setSelectedSpesialisasi] = useState("");
  const [newKonselor, setNewKonselor] = useState({
    nama: "",
    email: "",
    password: "",
    noTelepon: "",
  });

  // State untuk melacak kesalahan pada input
  const [errors, setErrors] = useState({
    nama: "",
    email: "",
    password: "",
    spesialisasi: "",
    noTelepon: "",
  });

  const { isLoading, konselors } = useSelector((state) => state.konselor);
  const { isLoadingSpesialisasi, spesialisasis } = useSelector(
    (state) => state.spesialis
  );

  useEffect(() => {
    const fetchData = async () => {
      const userData = {
        token: localStorage.getItem("token"),
        userId: localStorage.getItem("userId"),
      };
      if (userData.token && userData.userId) {
        dispatch(loginSuccess(userData));
      }
      dispatch(getDataKonselor());
      dispatch(getDataSpesialisasi());
    };

    fetchData();
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredKonselors = konselors.data?.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchKeyword.toLowerCase())
    )
  );

  const handleCreate = () => {
    setIsEditing(false);
    setOpenModal(true);
  };

  const handleEdit = (id) => {
    const selectedKonselor = konselors.data?.find((item) => item._id === id);
    setEditKonselor(selectedKonselor);

    setNewKonselor({
      nama: selectedKonselor ? selectedKonselor.nama : "",
      email: selectedKonselor ? selectedKonselor.email : "",
      noTelepon: selectedKonselor ? selectedKonselor.noTelepon : "",
    });

    setSelectedSpesialisasi(
      selectedKonselor.spesialisasi.length > 0
        ? selectedKonselor.spesialisasi[0]._id
        : ""
    );

    setIsEditing(true);
    setOpenModal(true);
  };

  const handleSaveData = async () => {
    // Validasi
    const newErrors = {};
    Object.keys(newKonselor).forEach((key) => {
      if (newKonselor[key] === "") {
        newErrors[key] = "Harap isi kolom ini";
      }
    });

    if (selectedSpesialisasi === "") {
      newErrors.spesialisasi = "Harap pilih spesialisasi";
    }

    setErrors(newErrors);

    // Jika terdapat kesalahan, hentikan penyimpanan data
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Data konselor
    const konselorData = {
      ...newKonselor,
      spesialisasi: selectedSpesialisasi,
    };

    if (isEditing) {
      dispatch(updateDataKonselor(editKonselor._id, konselorData));
    } else {
      dispatch(createDataKonselor(konselorData));
    }

    dispatch(getDataKonselor());
    setOpenModal(false);
    setEditKonselor(null);
    setNewKonselor({
      nama: "",
      email: "",
      password: "",
      noTelepon: "",
    });
    setSelectedSpesialisasi("");
    setIsEditing(false);
  };

  const handleDelete = (id) => {
    setEditKonselor(id);
    setOpenModalDelete(true);
  };

  const handleAcceptDelete = async () => {
    await dispatch(deleteDataKonselor(editKonselor));
    dispatch(getDataKonselor());
    setOpenModalDelete(false);
  };

  return (
    <div>
      <Toaster />
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
            <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs sticky top-0 z-10 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                {filteredKonselors?.map((item) => (
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

        {/* Modal */}
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>
            {isEditing ? "Update Data Konselor" : "Create Data Konselor"}
          </Modal.Header>
          <Modal.Body>
            <form action="" className="flex flex-col text-sm gap-2">
              <label htmlFor="nama">Nama Konselor</label>
              <input
                className={`border rounded-lg ${
                  errors.nama ? "border-red-500" : ""
                }`}
                type="text"
                placeholder="Nama Konselor"
                value={newKonselor.nama}
                onChange={(e) =>
                  setNewKonselor({ ...newKonselor, nama: e.target.value })
                }
              />
              {errors.nama && (
                <p className="text-red-500 text-sm">{errors.nama}</p>
              )}

              <label htmlFor="email">Email</label>
              <input
                className={`border rounded-lg ${
                  errors.email ? "border-red-500" : ""
                }`}
                type="email"
                placeholder="Email"
                value={newKonselor.email}
                onChange={(e) =>
                  setNewKonselor({ ...newKonselor, email: e.target.value })
                }
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              <label htmlFor="password">Password</label>
              <input
                className={`border rounded-lg ${
                  errors.password ? "border-red-500" : ""
                }`}
                type="password"
                placeholder="Password"
                value={newKonselor.password}
                onChange={(e) =>
                  setNewKonselor({ ...newKonselor, password: e.target.value })
                }
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}

              <label htmlFor="spesialisasi">Spesialisasi</label>
              <select
                className={`rounded-xl ${
                  errors.spesialisasi ? "border-red-500" : ""
                }`}
                name="spesialisasi"
                id="spesialisasi"
                value={selectedSpesialisasi}
                onChange={(e) => setSelectedSpesialisasi(e.target.value)}
              >
                <option value="" disabled>
                  Pilih Spesialisasi
                </option>
                {spesialisasis.data?.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.namaSpesialisasi}
                  </option>
                ))}
              </select>
              {errors.spesialisasi && (
                <p className="text-red-500 text-sm">{errors.spesialisasi}</p>
              )}

              <label htmlFor="noTelepon">No Telepon</label>
              <input
                className={`border rounded-lg ${
                  errors.noTelepon ? "border-red-500" : ""
                }`}
                type="number"
                placeholder="No Telepon"
                value={newKonselor.noTelepon}
                onChange={(e) =>
                  setNewKonselor({ ...newKonselor, noTelepon: e.target.value })
                }
              />
              {errors.noTelepon && (
                <p className="text-red-500 text-sm">{errors.noTelepon}</p>
              )}
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleSaveData}>Save</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
        {/* akhir modal */}

        {/* Modal Delete */}
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
        {/* Akhir Modal Delete */}
      </div>
    </div>
  );
}

export default Konselor;

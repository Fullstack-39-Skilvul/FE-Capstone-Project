import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDataBooking,
  getDataBooking,
} from "../../redux/action/bookingAdminAction";
import dayjs from "dayjs";
import { Button, Modal, Spinner } from "flowbite-react";
import { Toaster } from "react-hot-toast";

function Booking() {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isEdit, setIsEdit] = useState("");
  const [editBooking, setEditBooking] = useState(null);
  const { isLoading, bookings } = useSelector((state) => state.bookingAdmin);

  console.log(bookings?.data);
  useEffect(() => {
    dispatch(getDataBooking());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredBookings = bookings.data?.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchKeyword.toLowerCase())
    )
  );

  const handleDelete = (id) => {
    setOpenModalDelete(true);
    setEditBooking(id);
  };

  const handleAcceptDelete = async () => {
    await dispatch(deleteDataBooking(editBooking));
    dispatch(getDataBooking());
    setOpenModalDelete(false);
  };

  return (
    <div>
      <Toaster />
      <div className="text-sky-500 font-semibold text-2xl">Data Booking</div>
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
            <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs sticky top-0 z-10 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nama Pasien
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nama Konselor
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tanggal
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jam
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jenis Konseling
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Platform
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings?.map((item) => (
                  <tr
                    key={item._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.pasien?.namaPasien}
                    </th>
                    <td className="px-6 py-4">{item.konselor?.nama}</td>
                    <td className="px-3 py-4">
                      {dayjs(item.tanggal).format("DD-MM-YYYY")}
                    </td>
                    <td className="px-6 py-4">{item.waktu}</td>
                    <td className="px-6 py-4">{item.jenisKonseling?.jenis}</td>
                    <td className="px-6 py-4">
                      {item.jenisKonseling?.platformPertemuan}
                    </td>
                    <td className="px-6 py-4">{item.status}</td>

                    <td className="px-6 py-4 gap-2 flex items-center">
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
        {/* <Modal show={openModal} onClose={() => setOpenModal(false)}>
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

              <label htmlFor="password">Password</label>
              <input
                className="border rounded-lg"
                type="password"
                placeholder="Password"
                value={newKonselor.password}
                onChange={(e) =>
                  setNewKonselor({ ...newKonselor, password: e.target.value })
                }
              />

              <label htmlFor="spesialisasi">Spesialisasi</label>
              <select
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
        </Modal> */}
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

export default Booking;

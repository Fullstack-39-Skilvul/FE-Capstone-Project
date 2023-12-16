import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { Button, Modal, Spinner } from "flowbite-react";
import { Toaster } from "react-hot-toast";
import { getJadwalKonselor } from "../../redux/action/konselorAction";
import { updateDataBooking } from "../../redux/action/bookingAdminAction";

function JadwalKonselor() {
  const dispatch = useDispatch();
  const { isLoading, konselors } = useSelector((state) => state.konselor);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [confirmationType, setConfirmationType] = useState("");

  useEffect(() => {
    dispatch(getJadwalKonselor());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleConfirmation = async () => {
    setShowConfirmationModal(false);
    const updatedStatus = { status: confirmationType };
    await dispatch(updateDataBooking(selectedItem._id, updatedStatus));
    dispatch(getJadwalKonselor());

    if (confirmationType === "Dimulai") {
      window.open(`https://wa.me/${selectedItem.pasien?.noTelepon}`, "_blank");
    }
  };

  const handleCancelConfirmation = () => {
    setShowConfirmationModal(false);
  };

  const handleStart = (id) => {
    const selectedItem = konselors?.find((item) => item._id === id);
    setSelectedItem(selectedItem);
    setConfirmationMessage("Apakah Anda yakin konseling ini telah dimulai?");
    setConfirmationType("Dimulai");
    setShowConfirmationModal(true);
  };

  const handleComplete = (id) => {
    const selectedItem = konselors.find((item) => item._id === id);
    setSelectedItem(selectedItem);
    setConfirmationMessage("Apakah Anda yakin konseling ini telah selesai?");
    setConfirmationType("Selesai");
    setShowConfirmationModal(true);
  };

  const renderActionButton = (item) => {
    if (item.status === "Pending") {
      return (
        <a
          href="#"
          className="font-medium bg-sky-500 text-white py-1 px-2 rounded-lg cursor-not-allowed opacity-50 disabled"
          disabled={item.status === "Pending"}
          alt="Tindakan Dilarang"
        >
          Mulai
        </a>
      );
    } else if (item.status === "Confirmed") {
      return (
        <a
          onClick={() => handleStart(item._id)}
          href="#"
          className="font-medium bg-sky-500 text-white py-1 px-2 rounded-lg"
          alt="Mulai Konseling"
        >
          Mulai
        </a>
      );
    } else if (item.status === "Dimulai") {
      return (
        <a
          onClick={() => handleComplete(item._id)}
          href="#"
          className="font-medium bg-yellow-300 text-white py-1 px-2 rounded-lg"
          alt="Selesaikan Konseling"
        >
          Selesaikan
        </a>
      );
    }

    return null;
  };

  const filteredJadwal = Array.isArray(konselors)
    ? konselors.filter(
        (item) =>
          Object.values(item).some(
            (value) =>
              typeof value === "string" &&
              value.toLowerCase().includes(searchKeyword.toLowerCase())
          ) ||
          (item.pasien &&
            Object.values(item.pasien).some(
              (pasienValue) =>
                typeof pasienValue === "string" &&
                pasienValue.toLowerCase().includes(searchKeyword.toLowerCase())
            )) ||
          (item.jenisKonseling &&
            Object.values(item.jenisKonseling).some(
              (jenisKonselingValue) =>
                typeof jenisKonselingValue === "string" &&
                jenisKonselingValue
                  .toLowerCase()
                  .includes(searchKeyword.toLowerCase())
            ))
      )
    : [];

  return (
    <div>
      <Toaster />
      <div className="text-sky-500 font-semibold text-2xl">Jadwal Saya</div>
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
                    No Telepon
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
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
                {filteredJadwal?.map((item) => (
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
                    <td className="px-6 py-4">{item.pasien?.noTelepon}</td>
                    <td className="px-6 py-4">{item.pasien?.email}</td>
                    <td className="px-3 py-4">
                      {dayjs(item.tanggal).format("DD-MM-YYYY")}
                    </td>
                    <td className="px-6 py-4">{item.waktu}</td>
                    <td className="px-6 py-4">{item.jenisKonseling?.jenis}</td>
                    <td className="px-6 py-4">
                      {item.jenisKonseling?.platformPertemuan || ""}
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className={`${
                          item.status === "Pending"
                            ? "bg-red-100 text-center text-red-400 border border-red-400 rounded px-1"
                            : item.status === "Confirmed"
                            ? "bg-sky-100 text-center text-sky-400 border border-sky-400 rounded px-1"
                            : item.status === "Dimulai"
                            ? "bg-yellow-100 text-center text-yellow-400 border border-yellow-400 rounded"
                            : "bg-green-100 text-center text-green-400 border border-green-400 rounded"
                        }`}
                      >
                        {item.status}
                      </div>
                    </td>

                    <td className="px-6 py-4 gap-2 flex items-center">
                      {renderActionButton(item)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      <Modal
        size={"xl"}
        show={showConfirmationModal}
        onClose={handleCancelConfirmation}
      >
        <Modal.Header>Konfirmasi</Modal.Header>
        <Modal.Body>
          <p>{confirmationMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="bg-green-500 text-white"
            onClick={handleConfirmation}
          >
            Ya, {confirmationType}
          </Button>
          <Button className="bg-sky-500" onClick={handleCancelConfirmation}>
            Batal
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default JadwalKonselor;

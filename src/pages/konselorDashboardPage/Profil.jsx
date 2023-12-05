import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Spinner } from "flowbite-react";
import { User } from "phosphor-react";
import axios from "axios";
import { Toaster } from "react-hot-toast";

import {
  getDataKonselorById,
  updateDataKonselor,
} from "../../redux/action/konselorAction";
import { getDataSpesialisasi } from "../../redux/action/spesialisasiAction";

function Profil() {
  const [selectedSpesialisasi, setSelectedSpesialisasi] = useState("");
  const [newKonselor, setNewKonselor] = useState({
    nama: "",
    bio: "",
    motivasi: "",
    email: "",
    avatar: "",
    noTelepon: "",
    password: "",
    newPassword: "",
    confirmNewPassword: "",
    spesialisasi: "",
  });

  const [openDataModal, setOpenDataModal] = useState(false);
  const [openPasswordModal, setOpenPasswordModal] = useState(false);

  const dispatch = useDispatch();
  const { isLoading, konselors } = useSelector((state) => state.konselor);
  const { isLoadingSpesialisasi, spesialisasis } = useSelector(
    (state) => state.spesialis
  );

  useEffect(() => {
    dispatch(getDataKonselorById());
    dispatch(getDataSpesialisasi());
  }, [dispatch]);

  const handleEdit = () => {
    setNewKonselor({
      nama: konselors.nama,
      bio: konselors.bio,
      motivasi: konselors.motivasi,
      email: konselors.email,
      avatar: konselors.avatar || "",
      noTelepon: konselors.noTelepon,
      password: konselors.password,
      spesialisasi:
        konselors.spesialisasi.length > 0 ? konselors.spesialisasi[0]._id : "",
    });

    setSelectedSpesialisasi(
      konselors.spesialisasi.length > 0 ? konselors.spesialisasi[0]._id : ""
    );
    setOpenDataModal(true);
  };

  const handleEditPassword = () => {
    setNewKonselor({
      newPassword: "",
      confirmNewPassword: "",
    });

    setOpenPasswordModal(true);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewKonselor({ ...newKonselor, avatar: file });
    }
  };

  const handleSaveData = async () => {
    if (newKonselor.avatar) {
      const formData = new FormData();
      formData.append("file", newKonselor.avatar);
      formData.append("upload_preset", "perlu0f5");

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/da8adghy9/image/upload",
          formData
        );

        const imageUrl = response.data.secure_url;

        const konselorData = {
          ...newKonselor,
          avatar: imageUrl,
          spesialisasi: selectedSpesialisasi,
        };

        await dispatch(updateDataKonselor(konselors._id, konselorData));

        await setNewKonselor({
          nama: "",
          bio: "",
          motivasi: "",
          email: "",
          avatar: "",
          noTelepon: "",
          password: "",
          spesialisasi: "",
        });

        await dispatch(getDataKonselorById());
        setOpenDataModal(false);
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        return;
      }
    }
  };

  const handleSavePassword = async () => {
    // Validasi password baru
    if (
      !newKonselor.newPassword ||
      newKonselor.newPassword !== newKonselor.confirmNewPassword
    ) {
      alert(
        "Konfirmasi password baru tidak sesuai atau password baru tidak valid"
      );
      return;
    }

    // Simpan password baru
    const konselorData = {
      ...newKonselor,
      password: newKonselor.newPassword,
    };

    await dispatch(updateDataKonselor(konselors._id, konselorData));
    await dispatch(getDataKonselorById());
    await setNewKonselor({
      ...newKonselor,
      newPassword: "",
      confirmNewPassword: "",
    });

    setOpenPasswordModal(false);
  };

  return (
    <div>
      <Toaster />
      <div className="text-sky-500 font-semibold text-2xl">My Profil</div>
      {isLoading ? (
        <div className=" mt-40 grid place-content-center ">
          <Spinner />
        </div>
      ) : (
        <div className="relative max-h-80 border overflow-x-auto p-10 shadow-md sm:rounded-lg mt-5">
          <div className=" w-49 h-40 object-cover mb-[150px]">
            {konselors.avatar ? (
              <div className="flex justify-center flex-col items-center ">
                <img
                  className="border object-cover rounded-full w-40 h-40"
                  src={konselors.avatar}
                  alt="Avatar"
                />
                <div className=" text-sm mt-5 border w-full p-5 rounded">
                  <div className="font-semibold text-sky-500 text-lg">Bio</div>
                  <p>{konselors.bio ? konselors.bio : "konselor"}</p>
                </div>
              </div>
            ) : (
              <User />
            )}
          </div>
          <div className="flex flex-col mt-10">
            <div className="flex gap-20">
              <label htmlFor="nama" className=" w-40">
                Nama
              </label>
              <p>{konselors.nama ? konselors.nama : "konselor"}</p>
            </div>
            <div className="flex gap-20">
              <label htmlFor="motivasi" className=" w-40">
                Motivasi
              </label>
              <p>{konselors.motivasi ? konselors.motivasi : "not Found"}</p>
            </div>
            <div className="flex gap-20">
              <label htmlFor="email" className="w-40">
                Spesialis
              </label>
              <p>
                {konselors.spesialisasi && konselors.spesialisasi.length > 0
                  ? konselors.spesialisasi[0].namaSpesialisasi
                  : ""}
              </p>
            </div>
            <div className="flex gap-20">
              <label htmlFor="email" className="w-40">
                Email
              </label>
              <p>{konselors.email ? konselors.email : "not found"}</p>
            </div>
            <div className="flex gap-20">
              <label htmlFor="password" className="w-40">
                Password
              </label>
              <p
                className="text-sky-500 cursor-pointer hover:text-sky-600"
                onClick={handleEditPassword}
              >
                Ganti Password
              </p>
            </div>
            <div className="flex gap-20">
              <label htmlFor="noTelepon" className=" w-40">
                No Telepon
              </label>
              <p>{konselors.noTelepon ? konselors.noTelepon : "not found"}</p>
            </div>
            <Button onClick={handleEdit} className="mt-5 bg-sky-500">
              Update Data
            </Button>
          </div>
        </div>
      )}
      {/* modal */}
      <Modal show={openDataModal} onClose={() => setOpenDataModal(false)}>
        <Modal.Header>Update Data</Modal.Header>
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

            <label htmlFor="bio">Biodata</label>
            <input
              className="border rounded-lg"
              type="text"
              placeholder="Biodata"
              value={newKonselor.bio}
              onChange={(e) =>
                setNewKonselor({ ...newKonselor, bio: e.target.value })
              }
            />

            <label htmlFor="motivasi">Motivasi</label>
            <input
              className="border rounded-lg"
              type="text"
              placeholder="Motivasi"
              value={newKonselor.motivasi}
              onChange={(e) =>
                setNewKonselor({ ...newKonselor, motivasi: e.target.value })
              }
            />

            <label htmlFor="avatar">Avatar</label>
            <input
              name="avatar"
              className="border rounded-lg"
              type="file"
              placeholder="Avatar"
              onChange={(e) => handleAvatarChange(e)}
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

            <label htmlFor="spesialisasi">Spesialisasi</label>
            <select
              className="rounded-lg"
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

            <label htmlFor="noTelepon">No Telepon</label>
            <input
              className="border rounded-lg"
              type="number"
              placeholder="No Telepon"
              value={newKonselor.noTelepon}
              onChange={(e) =>
                setNewKonselor({
                  ...newKonselor,
                  noTelepon: e.target.value,
                })
              }
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSaveData}>Simpan</Button>
          <Button color="gray" onClick={() => setOpenDataModal(false)}>
            Batal
          </Button>
        </Modal.Footer>
      </Modal>

      {/* modal ganti password */}
      <Modal
        show={openPasswordModal}
        onClose={() => setOpenPasswordModal(false)}
      >
        <Modal.Header>Ganti Password</Modal.Header>
        <Modal.Body>
          <form action="" className="flex flex-col text-sm gap-2">
            <label htmlFor="newPassword">Password Baru</label>
            <input
              className="border rounded-lg"
              type="password"
              placeholder="Password Baru"
              value={newKonselor.newPassword}
              onChange={(e) =>
                setNewKonselor({ ...newKonselor, newPassword: e.target.value })
              }
            />

            <label htmlFor="confirmNewPassword">Konfirmasi Password Baru</label>
            <input
              className="border rounded-lg"
              type="password"
              placeholder="Konfirmasi Password Baru"
              value={newKonselor.confirmNewPassword}
              onChange={(e) =>
                setNewKonselor({
                  ...newKonselor,
                  confirmNewPassword: e.target.value,
                })
              }
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSavePassword}>Simpan</Button>
          <Button color="gray" onClick={() => setOpenPasswordModal(false)}>
            Batal
          </Button>
        </Modal.Footer>
      </Modal>
      {/* akhir modal ganti password */}
    </div>
  );
}

export default Profil;

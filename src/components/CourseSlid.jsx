import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";

Modal.setAppElement("#root");

function CourseSlid() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/user");
        setData(response.data || []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center text-4xl text-red-500">
        Error: {error.message}
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="flex h-screen items-center justify-center text-4xl text-red-500">
        No data available
      </div>
    );
  }

  return (
    <section className="p-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((user) => (
          <div key={user._id || user.id} className="rounded-lg border p-4 shadow-md">
            <img
              src={user.picture}
              alt={user.name}
              className="mb-4 h-40 w-full rounded object-cover"
            />
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.company}</p>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">
              {user.about.length > 100
                ? user.about.slice(0, 100) + "..."
                : user.about}
              <button
                className="ml-2 text-red-600 underline hover:text-indigo-600"
                onClick={() => setSelectedUser(user)}
              >
                See more
              </button>
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!selectedUser}
        onRequestClose={() => setSelectedUser(null)}
        contentLabel="User Details"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            color: "lightsteelblue",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            display:"block"
          },
        }}
      >
        <h2 className="text-gray-700">{selectedUser?.about}</h2>
        <button className="pt-4 text-red-600" onClick={() => setSelectedUser(null)}>
          Close
        </button>
      </Modal>
    </section>

  );
}

export default CourseSlid;
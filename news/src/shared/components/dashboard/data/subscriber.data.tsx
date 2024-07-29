"use client";
import useSubscriberData from "@/components/Hooks/useSubscriberdata";

const SubscriberData = () => {
  const { data, Loading } = useSubscriberData();

  console.log("Data in Component: ", data, Loading); // Log component data

  return (
    <div>
      {Loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Created At</th>
              <th className="px-4 py-2">Updated At</th>
              <th className="px-4 py-2">Version</th>
            </tr>
          </thead>
          <tbody>
            {data.map((subscriber: any) => (
              <tr key={subscriber._id}>
                <td className="border px-4 py-2">{subscriber._id}</td>
                <td className="border px-4 py-2">{subscriber.email}</td>
                <td className="border px-4 py-2">{new Date(subscriber.createdAt).toLocaleString()}</td>
                <td className="border px-4 py-2">{new Date(subscriber.updatedAt).toLocaleString()}</td>
                <td className="border px-4 py-2">{subscriber.__v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SubscriberData;

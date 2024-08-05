"use client";
import useSubscriberData from "@/components/Hooks/useSubscriberdata";

const SubscriberData = () => {
  const { data, loading } = useSubscriberData();

  console.log("Data in Component: ", data, loading); // Log component data

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data.length) {
    return <p>No data available for users </p>;
  }

  return (
    <div>
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
              <td className="border px-4 py-2">{new Date(subscriber.createdAt.$date).toLocaleString()}</td>
              <td className="border px-4 py-2">{new Date(subscriber.updatedAt.$date).toLocaleString()}</td>
              <td className="border px-4 py-2">{subscriber.__v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubscriberData;

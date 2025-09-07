import { useState } from "react";

function CredentialList({ infoarray }) {
  const [query, setQuery] = useState("");

  const filtered = infoarray.filter(item =>
    item.site.toLowerCase().includes(query.toLowerCase()) ||
    item.username.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search credentials..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border rounded w-full mb-4"
      />

      {/* Filtered results */}
      {filtered.map((item, idx) => (
        <div key={idx} className="p-2 border rounded mb-2">
          <strong>{item.site}</strong> – {item.username}
        </div>
      ))}
    </div>
  );
}

export default CredentialList;

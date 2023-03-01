import React from "react";
export default function ChacheMemory() {
  // Function to add our give multiple cache data
  const addMultipleCacheData = async (cacheList) => {
    for (var i = 0; i < cacheList.length; i++) {
      // Converting our response into Actual Response form
      const data = new Response(JSON.stringify(cacheList[i].cacheData));

      if ("caches" in window) {
        // Opening given cache and putting our data into it
        var cache = await caches.open(cacheList[i].cacheName);
        cache.put(cacheList[i].url, data);
      }
    }
    alert("Multiple Cache Stored!");
  };

  const CacheToBeStored = [
    {
      cacheName: "CacheOne",
      cacheData: "1 CacheData",
      url: "https://localhost:300",
    },
    {
      cacheName: "CacheTwo",
      cacheData: "2 CacheData",
      url: "https://localhost:300",
    },
    {
      cacheName: "CacheThree",
      cacheData: "3rd CacheData",
      url: "https://localhost:300",
    },
  ];

  return (
    <div style={{ height: 500, width: "80%" }}>
      <button onClick={() => addMultipleCacheData(CacheToBeStored)}>
        Add Multiple Caches
      </button>
    </div>
  );
}

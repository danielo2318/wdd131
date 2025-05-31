document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

const tempEl = document.getElementById("temp");
const windEl = document.getElementById("wind");
const windChillEl = document.getElementById("windChill");

if (tempEl && windEl && windChillEl) {
  const temp = parseFloat(tempEl.textContent);
  const wind = parseFloat(windEl.textContent);

  function calculateWindChill(t, s) {
    return (
      13.12 +
      0.6215 * t -
      11.37 * Math.pow(s, 0.16) +
      0.3965 * t * Math.pow(s, 0.16)
    ).toFixed(1);
  }

  const windChill =
    temp <= 10 && wind > 4.8 ? `${calculateWindChill(temp, wind)} °C` : "N/A";

  windChillEl.textContent = windChill;
}

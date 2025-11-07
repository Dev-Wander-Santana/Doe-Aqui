// LocalStorage Management
function getDonations() {
  const donations = localStorage.getItem("doeaqui-donations");
  return donations ? JSON.parse(donations) : [];
}

function addDonation(donation) {
  const donations = getDonations();
  const newDonation = {
    ...donation,
    id: Date.now().toString(),
    date: new Date().toISOString(),
  };
  donations.push(newDonation);
  localStorage.setItem("doeaqui-donations", JSON.stringify(donations));
  return newDonation;
}

function getDonationsByOng(ongId) {
  return getDonations().filter(d => d.ongId === ongId);
}

function getTotalDonated() {
  return getDonations().reduce((sum, d) => sum + d.amount, 0);
}

function getTotalDonations() {
  return getDonations().length;
}

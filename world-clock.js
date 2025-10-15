function upDated() {
  const nigeriaDate = document.getElementById("nigeria-date");
  const nigeriaTime = document.getElementById("nigeria-time");

  const currentTime = moment().tz("Africa/Lagos");
  nigeriaDate.innerHTML = currentTime.format("ddd MMM d YYYY");
  nigeriaTime.innerHTML = currentTime.format("h:m:s [<small>]A[</small>]");

  const losAngelesDate = document.getElementById("los-angeles-date");
  const losAngelesTime = document.getElementById("los-angeles-time");

  const TimeZone = moment().tz("America/Los_Angeles");
  losAngelesDate.innerHTML = TimeZone.format("ddd MMM d YYYY");
  losAngelesTime.innerHTML = TimeZone.format("h:m:s [<small>]A[</small>]");

  const turkeyDate = document.getElementById("turkey-date");
  const turkeyTime = document.getElementById("turkey-time");

  const turkeyTimeZone = moment().tz("Asia/Istanbul");
  turkeyDate.innerHTML = turkeyTimeZone.format("ddd MMM d YYYY");
  turkeyTime.innerHTML = turkeyTimeZone.format("h:m:s [<small>]A[</small>]");
}

upDated();
setInterval(upDated, 1000);

export function FORM_POST(body) {
  return {
    url: 'https://script.google.com/macros/s/AKfycbxLb5Namx1Fb2qcMwfSDy8jasiLzG3U_-PV-BJXNDQ-I8v6oqIkfFbLRlhXCPqu9NKGiA/exec',
    options: {
      method: 'POST',
      mode: "no-cors",
      body: body,
    },
  };
}

import { useEffect, useState } from 'react';

export const useNetwork = () => {
  const [fetchedData, setFetchedData] = useState<any>([]);

  useEffect(() => {
    setFetchedData(getMockupData);
  }, []);

  return fetchedData;
};

const getMockupData = [
  {
    id: "1",
    name: "Dawid",
    birthDate: "325786385",
    phone: "2948757",
    city: "Asdfdbsg",
  },
  {
    id: "2",
    name: "Pablo",
    birthDate: "78264235",
    phone: "48645746",
    city: "Fdsdkbngkj",
  },
  {
    id: "3",
    name: "Mati",
    birthDate: "2376452637",
    phone: "34958734",
    city: "Hskjbnfhug",
  },{
    id: "4",
    name: "Franek",
    birthDate: "387563485345",
    phone: "984357342",
    city: "Gshdbfhsd",
  },
  {
    id: "5",
    name: "Gasjhdbsd",
    birthDate: "2785637845",
    phone: "38745678346",
    city: "Gahbhf",
  },
  {
    id: "6",
    name: "Hsdbfhgd",
    birthDate: "37364539",
    phone: "3498796",
    city: "Wsdkfbjsgf",
  },
];

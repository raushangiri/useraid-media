import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LevelTeam = () => {
  let navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [level2customers, setLevel2Customers] = useState([]);
  const [level3customers, setLevel3Customers] = useState([]);
  const [level4customers, setLevel4Customers] = useState([]);
  const [level5customers, setLevel5Customers] = useState([]);
  const [level6customers, setLevel6Customers] = useState([]);
  const [level7customers, setLevel7Customers] = useState([]);
  const [level8customers, setLevel8Customers] = useState([]);
  const [level9customers, setLevel9Customers] = useState([]);
  // const [level10customers, setLevel10Customers] = useState([]);

  const [data1, setData] = useState({
    customer_id: "",
    referrel_id: "",
    name: "",
    email_id: "",
    contact_number: "",
    password: "",
    account_status: "",
    pan_number: "",
    qr_code_screenshot: "",
  });

  const { customer_id } = data1;
  const viewDirectTeam = async () => {
    try {
      const res = await fetch("/level-team", {
        method: "GET",
        headers: {
          Accept: "applicate/json",
          "Content-Type": "applicate/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/sign-in");
    }
  };

  const fetchlevel2Data = async () => {
    if (customers) {
      const response = await fetch(`/Referrellevel2/${customers.join(",")}`);
      const data = await response.json();
      setLevel2Customers(data.referredCustomerIds);
    } else {
      console.log("no data");
    }
  };
  const fetchlevel3Data = async () => {
    if (level2customers) {
      const response = await fetch(
        `/Referrellevel2/${level2customers.join(",")}`
      );
      const data = await response.json();
      setLevel3Customers(data.referredCustomerIds);
    } else {
      console.log("no data");
    }
  };
  const fetchlevel4Data = async () => {
    if (level3customers) {
      const response = await fetch(
        `/Referrellevel2/${level3customers.join(",")}`
      );
      const data = await response.json();
      setLevel4Customers(data.referredCustomerIds);
    } else {
      console.log("no data");
    }
  };
  const fetchlevel5Data = async () => {
    if (level4customers) {
      const response = await fetch(
        `/Referrellevel2/${level4customers.join(",")}`
      );
      const data = await response.json();
      setLevel5Customers(data.referredCustomerIds);
    } else {
      console.log("no data");
    }
  };
  const fetchlevel6Data = async () => {
    if (level5customers) {
      const response = await fetch(
        `/Referrellevel2/${level5customers.join(",")}`
      );
      const data = await response.json();
      setLevel6Customers(data.referredCustomerIds);
    } else {
      console.log("no data");
    }
  };
  const fetchlevel7Data = async () => {
    if (level6customers) {
      const response = await fetch(
        `/Referrellevel2/${level6customers.join(",")}`
      );
      const data = await response.json();
      setLevel7Customers(data.referredCustomerIds);
    } else {
      console.log("no data");
    }
  };

  const fetchlevel8Data = async () => {
    if (level7customers) {
      const response = await fetch(
        `/Referrellevel2/${level7customers.join(",")}`
      );
      const data = await response.json();
      setLevel8Customers(data.referredCustomerIds);
    } else {
      console.log("no data");
    }
  };
  const fetchlevel9Data = async () => {
    if (level8customers) {
      const response = await fetch(
        `/Referrellevel2/${level8customers.join(",")}`
      );
      const data = await response.json();
      setLevel9Customers(data.referredCustomerIds);
    } else {
      console.log("no data");
    }
  };
  // const fetchlevel10Data = async () => {
  //   if (level9customers) {
  //     const response = await fetch(
  //       `/Referrellevel2/${level9customers.join(",")}`
  //     );
  //     const data = await response.json();
  //     setLevel10Customers(data.referredCustomerIds);
  //   } else {
  //     console.log("no data");
  //   }
  // };
  useEffect(() => {
    viewDirectTeam();

    const fetchData = async () => {
      const response = await fetch(`/Referrellevel1/${customer_id}`);
      const data = await response.json();
      setCustomers(data.referredCustomerIds);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customer_id]);

  useEffect(() => {
    fetchlevel2Data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customers]);

  useEffect(() => {
    fetchlevel3Data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level2customers]);
  useEffect(() => {
    fetchlevel4Data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level3customers]);
  useEffect(() => {
    fetchlevel5Data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level4customers]);
  useEffect(() => {
    fetchlevel6Data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level5customers]);
  useEffect(() => {
    fetchlevel7Data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level6customers]);
  useEffect(() => {
    fetchlevel8Data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level7customers]);
  useEffect(() => {
    fetchlevel9Data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level8customers]);
  // useEffect(() => {
  //   fetchlevel10Data();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [level9customers]);
  return (
    <div className="AdminContainer">
      <div className="row mx-0 p-4">
        <div className="col-sm-12 rounded p-5 metalic-color ">
          <h2 className="mb-4">Level Team</h2>

          <div className="accordion" id="accordionExample">
            <AccordionItem number="1" customer_id={customer_id} />

            <AccordionItem number="2" customer_id={customers} />

            <AccordionItem number="3" customer_id={level2customers} />
            <AccordionItem number="4" customer_id={level3customers} />
            <AccordionItem number="5" customer_id={level4customers} />
            <AccordionItem number="6" customer_id={level5customers} />
            <AccordionItem number="7" customer_id={level6customers} />
            <AccordionItem number="8" customer_id={level7customers} />
            <AccordionItem number="9" customer_id={level8customers} />
            <AccordionItem number="10" customer_id={level9customers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelTeam;

const AccordionItem = (val) => {
  return (
    <>
      <div className="accordion-item bg-transparent my-4">
        <h2 className="accordion-header" id={`heading${val.number}`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${val.number}`}
            aria-expanded="false"
            aria-controls={`collapse${val.number}`}
          >
            Level {`${val.number}`}
          </button>
        </h2>
        <div
          id={`collapse${val.number}`}
          className="accordion-collapse collapse   "
          aria-labelledby={`heading${val.number}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body ">
            <LevelTable Level={val.number} customer_id={val.customer_id} />
          </div>
        </div>
      </div>
    </>
  );
};

const LevelTable = (props) => {
  const { customer_id } = props;
  const [teamList, setteamList] = useState(null);

  const listdata = async () => {
    try {
      const res = await fetch(`/level1ref/${customer_id}`);
      const data = await res.json();
      setteamList(data.referredCustomerIds);

      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      if (customer_id) {
        listdata();
      }
    }, // eslint-disable-next-line
    [customer_id]
  );
  return (
    <>
      <table className="table table-striped text-light">
        <thead>
          <tr>
            <th scope="col " className="fs-4">
              Sponsor Id
            </th>
            <th scope="col" className="fs-4">
              User Id
            </th>
            <th scope="col" className="fs-4">
              Name
            </th>
            <th scope="col" className="fs-4">
              Joining Date
            </th>
            <th scope="col" className="fs-4">
              Status
            </th>
          </tr>
        </thead>
        {teamList
          ? teamList.map((data) => {
              return (
                <LevelTeamlist
                  key={data._id}
                  referrel_id={data.referrel_id}
                  name={data.name}
                  userid={data.customer_id}
                  account_status={data.account_status}
                  createdAt={data.createdAt}
                />
              );
            })
          : null}
      </table>
    </>
  );
};

const LevelTeamlist = (props) => {
  const { referrel_id, name, userid, account_status, createdAt } = props;

  const dateObject = new Date(createdAt);
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1; // Add 1 to account for zero-based indexing
  const date = dateObject.getDate();

  return (
    <>
      <tbody>
        <tr>
          <td className="text-white fs-4">{referrel_id}</td>
          <td className="text-white fs-4">{userid}</td>
          <td className="text-white fs-4">{name}</td>
          <td className="text-white fs-4">{`${date}-${month}-${year}`}</td>
          <td className="text-white fs-4">{account_status}</td>
        </tr>
      </tbody>
    </>
  );
};

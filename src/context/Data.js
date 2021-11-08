import React, { useContext, useEffect, useState } from "react";

const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [bill, setBill] = useState();
  const [tipPercent, setTipPercent] = useState();
  const [peopleNum, setPeopleNum] = useState();
  const [tip, setTip] = useState();
  const [total, setTotal] = useState();

  const handleBillChange = (value) => {
    setBill(() => value);
  };

  const handelPeopleNumChange = (value) => {
    setPeopleNum(() => value);
  };

  const handleTipPercentChange = (value) => {
    setTipPercent(() => value);
  };

  const handleReset = () => {
    setTotal();
    setTip();
    setTipPercent();
    setPeopleNum();
    setBill();
  };

  useEffect(() => {
    if (bill && tipPercent && peopleNum) {
      const tipPerPerson = (bill * (tipPercent / 100)) / peopleNum;
      const totalBill = +bill + +(tipPerPerson * peopleNum);
      setTip(tipPerPerson);
      setTotal(totalBill);
    }
    return;
  }, [bill, tipPercent, peopleNum]);

  const value = {
    bill,
    tipPercent,
    peopleNum,
    total,
    tip,
    handleBillChange,
    handleTipPercentChange,
    handelPeopleNumChange,
    handleReset,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

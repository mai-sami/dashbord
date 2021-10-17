import React from 'react'
import Header from '../Header'
import SellHome from './SellHome';
import Invoices from './Invoices';
import InsertBills from './InsertBills';
import SupplierList from './SupplierList';
import Insertsupplier from './Insertsupplier';

import Billsُxchange from './Billsُxchange';
   function AllHome() {
    return (
        <div className="home">

            <Header />
            <SellHome />
        </div>
    )
}

 
 function Invoicees() {
    return (
        <div className="home">

            <Header />
            <Invoices />
        </div>
    )
}

 function Billsُxchanges() {
    return (
        <div className="home">

            <Header />
            <Billsُxchange />
        </div>
    )
}

  function InsertBillss() {
    return (
        <div className="home">

            <Header />
            <InsertBills />
        </div>
    )
}

 function SupplierLists() {
    return (
        <div className="home">

            <Header />
            <SupplierList />
        </div>
    )
}




 function Insertsuppliers() {
    return (
        <div className="home">

            <Header />
            <Insertsupplier />
        </div>
    )
}






export  {Insertsuppliers, SupplierLists, Billsُxchanges,InsertBillss,AllHome,Invoicees}
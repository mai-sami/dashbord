import React from 'react'
import { Link } from 'react-router-dom';


import SearchIcon from '@material-ui/icons/Search';

var Supplier = [{id:4567, name: " مي سامي       ", type:"dsfsd" },
{id:4567, name: " مي سامي       ", type:"regr" },
{id:4567, name: " مي سامي       ", type:"awdsws" },{id:4567, name: " مي سامي       ", type:"5667" },
{id:4567, name: " مي سامي       ", type:"sdfds" },
{id:4567, name: " مي سامي       ", type:"wefed" },
{id:4567, name: " مي سامي       ", type:"wefefdrf" },
]
export default function SupplierList() {
    return (
        <div>
              <div classNAme="client">
        <div className="invoices__div">
<div className="search">
<input className="same" type="submit" value="حدف" />
<Link className="Link"  to="/insert"> 

 
<input  className="new" type="submit" value="جديد" />
</Link>

 
<div className="header__searchs">
<input  placeholder="ابحث عن مورد" className="header__searchInputs" />
<SearchIcon className="header__searchIcon"/>
</div>
 

</div>
<p className="cli__Ps"> قائمة   الموردين  </p>

        </div>
        <table id="tables">



        <tr className="th">
        <th className="check"><input type="checkbox" />معرف</th>

<th className="tab">اسم المورد</th>
<th className="tab">نوع المورد </th>

</tr>
{Supplier.map((Suppliers) => (

<tr>
<td className="datass"><input className="ch" type="checkbox" />{Suppliers.id}</td>

<td className="datas">{Suppliers.name}</td>
<td className="datas">{Suppliers.type}</td>

</tr>
  ))}
</table>

    </div>
        </div>
    )
}


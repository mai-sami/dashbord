import React from 'react'
import '../../Css/Client.css'
var Poblem = [{id:"234567", state: "   مفتوح       ", client: "  مي سامي  ", statuse: "mai@gmail.com", number:3232},
{id:"234567", state: "   مفتوح       ", client: "  مي سامي  ", statuse: "mai@gmail.com", number:3232},{id:"234567", state: "   مفتوح       ", client: "  مي سامي  ", statuse: "mai@gmail.com", number:3232},
{id:"234567", state: "   مفتوح       ", client: "  مي سامي  ", statuse: "mai@gmail.com", number:3232},
{id:"234567", state: "   مفتوح       ", client: "  مي سامي  ", statuse: "mai@gmail.com", number:3232},
 ];
function ProblemClient() {
    return (
        <div >
        <div className="suppp">
</div>
            <table id="customers">



                <tr className="th">
                    <th className="check">
                        <div className="div__check">
                        <input type="checkbox" />
                        <p className="__p">معرف</p>
                        </div>
                        </th>

                    <th className="name">حالة</th>
                    <th className="name">عميل</th>
                    <th className="names"> الضمان / حالة عقد الصيانة السنوي </th>
                    <th className="name">رمز الصنف</th>

                </tr>
                {Poblem.map((Poblems) => (

                    <tr>
                        <td className="checks"><input className="ch" type="checkbox" />{Poblems.id}</td>

                        <td className="data">{Poblems.state}</td>
                        <td className="data">{Poblems.client}</td>
                        <td className="data">{Poblems.statuse}</td>
                        <td className="data">{Poblems.number}</td>

                    </tr>
                ))}
            </table>
        </div>
    )
}

export default ProblemClient

import React from 'react'
import '../../Css/Client.css'


var Tickits = [{id:"234567", state: "   مفتوح       ", subjects: "  مشكلة تيست", email: "mai@gmail.com", },
{ id:"234567",state: "   مفتوح       ", subjects: "  مشكلة تيست", email: "mai@gmail.com", },
{id:"234567", state: "   مفتوح       ", subjects: "  مشكلة تيست", email: "mai@gmail.com", },
{id:"234567", state: "   مفتوح       ", subjects: "  مشكلة تيست", email: "mai@gmail.com", },
 ];
function SupportTickets() {
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
                    <th className="name">موضوع</th>
                    <th className="name">أثيرت بواسطة (بريد إلكتروني)  </th>

                </tr>
                {Tickits.map((tickit) => (

                    <tr>
                        <td className="checks"><input className="ch" type="checkbox" />{tickit.id}</td>

                        <td className="data">{tickit.state}</td>
                        <td className="data">{tickit.subjects}</td>
                        <td className="data">{tickit.email}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default SupportTickets

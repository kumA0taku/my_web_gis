
import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import homelogo from '../../assets/gismap.png'; // Import the image

export default function Menu() {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Symbol',
            icon: 'pi pi-image'
        },
        {
            label: 'Help',
            icon: 'pi pi-question-circle'
        }
    ];
    
    const start = <img alt="logo" src={homelogo} width='200' className="mr-2"></img>;

    return (
        <div className="card">
        <Menubar model={items} start = {start} />
        
        </div>
    )
}
        
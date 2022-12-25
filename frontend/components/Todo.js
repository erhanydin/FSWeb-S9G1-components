import React from 'react'


export default function Todo(prop) {

  const { item, updateMain, currents } = prop;
  const handleClick = () => {
    
    const digerleri  = [...currents]
    digerleri.filter(oge => oge.id === item.id)[0].tamamlandi = !item.tamamlandi;
    updateMain(digerleri);

  }


    return (
      <div>
        <li onClick={handleClick}>{item.isim} {item.tamamlandi ? 'Ok' : ''}</li>
      </div>
    )
}

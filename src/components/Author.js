import React, { useState } from 'react'

function Author() {
    const [author, setAuthor] = useState({ name: "Sabahattin", surname: "Ali" })
    return (
        <div>
            <h2>Author</h2>
            {author.name} {author.surname}
            <br />
            <br />
            <div>
                <button onClick={() => setAuthor({ ...author, name: "Yaşar" })}>İsim Değiştir</button>
                {//author name ve author surname değiştirilmek istendiğinde author içerisindeki değer obje olduğu için
                //setAuthor içerisine obje tanımlandı.Değiştirilmek istenen değişken için setAuthor({ name: "Yaşar" })}
                //şeklinde yazılsaydı author içerisinde bulunan obje silinip { name: "Yaşar" } tanımlanan obje yerleştirildiği
                //vakit surname değişkenini kaybetmiş olacaktık bunun çözüm yöntemi { ...author, name: "Yaşar" } author alanı
                // içindeki bütün alanlar yerleştirilip ardından değiştirilmek istenen alan yazıldı.Üç nokta ifadesi author objesi
                //içerisindeki bütün alanları function içerisine yerleştirir.Ardından değiştirilmek istenen eleman hangisi ise 
                //değiştirilebilir. 
                }
                <button onClick={() => setAuthor({ ...author, surname: "Kemal" })}>Soy İsmi Değiştir</button>
                {//<button onClick={() => setAuthor((prev) => ({ ...prev, surname: "Kemal" })}>Soy İsmi Değiştir</button>} şeklinde
                //prev kullanımı yapılabilir.
                }               
            </div>

        </div>

    )
}

export default Author

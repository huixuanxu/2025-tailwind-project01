import styles from'./Body.module.css';
function Body() {
  return (
  <div className="w-full h-full flex justify-center items-center flex-col gap-4">
    <div className={styles.mainbox}>
        <div className="flex flex-row items-center gap-5 px-2 py-2">
            <div className={styles.maintext}>
                <div className="text-5xl font-bold py-3 text-center items-center justify-center">Character Name</div>
                <div className="flex flex-col gap-2 justify-center"> 
                    <div className="text-shadow-md">He is a Liyue immortal, but he's not well known because he's not a lucky star that blesses people with good health, but rather a "Yaksha" that fights evil.</div>
                    <div className="text-xl">Birthday: April 17</div>
                    <div className="text-xl">Favorite Food: Almond Tofu</div>
                </div>
                
            </div>
            
            <img className={styles.characterimage} src="/images/image 24.png" alt="Character" />
        </div>
    </div>
    <div className={styles.secondbox}>
        <div className="flex flex-row justify-start items-center gap-4 px-8 py-2">

            <div className="flex flex-col">
               <div className="font-bold text-4xl text-center py-3">Search Title</div>
               <div className={styles.searchBox01}>Computer wallpaper</div>
               <div className={styles.searchBox02}>Mobile wallpaper</div>
               <div className={styles.searchBox03}>Collage</div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="grid grid-cols-2 justify-center items-center gap-3">
                    <img className={styles.qimage} src="/images/image 9.png" alt="Card 2.1" />
                    <img className={styles.qimage} src="/images/image 10.png" alt="Card 2.2" />
                </div>
                <img className={styles.namecard} src="/images/image 18.png" alt="Card 2.3" />
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row justify-center items-center gap-3 font-bold text-2xl text-center py-2">Artwork</div>
                <div className="flex flex-row justify-center items-center">
                    <img className={styles.artworkCard} src="/images/image 11.png" alt="Card 3.1" />
                    <img className={styles.artworkCard} src="/images/image 13.png" alt="Card 3.2" />
                </div>
                <div className={styles.artworkbutton}>
                    more artworks
                </div>
            </div>
        </div>
    </div>
  </div>    
  );
}

export default Body;
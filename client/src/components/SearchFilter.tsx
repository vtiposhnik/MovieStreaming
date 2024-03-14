import { Button } from "./utilComps"

export default function SearchFilter() {
    const options = {
        quality: [
            'all',
            '480p',
            '720p',
            '1080p',
            '2160p',
            '3D'
        ],
        genre: ['all', 'action', 'adventure', 'animation', 'biography', 'comedy', 'crime', 'documentary', 'drama', 'family', 'fantasy', 'film-noir', 'game-show', 'history', 'horror', 'music', 'musical', 'mystery', 'news', 'reality'],
        rating: ['0', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
        year: ['0', '2024', '2023', '2020-2024', '2010-2024', '2010-2019', '2000-2009', '1990-1999', '1980-1989', '1970-1979', '1950-1969', '1900-1949'],
        language: ['en', 'foreign', 'all', 'fr', 'ja', 'es', 'it', 'de', 'zh', 'ko', 'cn', 'hi', 'sv', 'ru', 'pt', 'ro', 'pl', 'nl', 'th', 'da', 'tr', 'ar', 'no', 'ta', 'id', 'fi', 'vi', 'hu', 'te', 'cs', 'fa', 'tl', 'et', 'uk', 'el', 'he', 'ml', 'pa', 'ms', 'bn', 'ca', 'is', 'ur', 'sr', 'sk', 'kn', 'mr', 'lv', 'lt', 'ka', 'hr', 'bg', 'xx', 'gl', 'eu', 'sh', 'mk', 'ku', 'af', 'ga', 'wo', 'yo', 'bs', 'bo', 'kk', 'sq', 'sw', 'am', 'hy', 'sl', 'yue', 'km', 'ps', 'st', 'zu', 'xh', 'gu', 'ab'],
        orderBy: ['Latest', 'Oldest', 'Featured', 'Seeds', 'Peers', 'Year', 'Rating', 'Likes', 'Alphabetical', 'Downloads']
    }


    return (
        <section className="w-[90%] mx-auto flex justify-center p-10 border">
            <form action="" className="grid gap-3">
                <div className="flex gap-4">
                    <input type="text" placeholder="Search..." className="rounded-xl border p-2"/>
                    <Button value="Search" url={'#'} />
                </div>

                <div className="flex gap-3">
                    <div className="selects-container">
                        <p>Quality:</p>
                        <select name="quality">
                            {options.quality.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className="selects-container">
                        <p>Genre:</p>
                        <select name="genre">
                            {options.genre.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className="selects-container">
                        <p>Rating:</p>
                        <select name="rating">
                            {options.rating.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className="selects-container">
                        <p>Year:</p>
                        <select name="year">
                            {options.year.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className="selects-container">
                        <p>Language:</p>
                        <select name="language">
                            {options.language.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className="selects-container selects-container-last">
                        <p>Order By:</p>
                        <select name="order_by">
                            {options.orderBy.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </form>
        </section>
    )
}

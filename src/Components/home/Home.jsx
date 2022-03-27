import React from 'react';
import "./home.scss"
import asideLogo from "../../Assets/svg/twitter-aside-logo.svg"
import home from "../../Assets/svg/home.svg"
import hash from "../../Assets/svg/hash.svg"
import notif from "../../Assets/svg/notif.svg"
import message from "../../Assets/svg/message.svg"
import book from "../../Assets/svg/bookmark.svg"
import list from "../../Assets/svg/list.svg"
import prof from "../../Assets/svg/prof.svg"
import more from "../../Assets/svg/more.svg"
import sett from '../../Assets/svg/settings.svg'
import dot from '../../Assets/svg/3dot.svg'
import prof1 from "../../Assets/png/profile1.png"
import prof2 from "../../Assets/png/profile2.png"
import stars from "../../Assets/svg/starts.svg"
import pic1 from "../../Assets/svg/ProfilePic.png"
import img from "../../Assets/svg/iimage.svg"
import smile from "../../Assets/svg/smile.svg"
import gif from "../../Assets/svg/gif.svg"
import status from "../../Assets/svg/status.svg"
import date from "../../Assets/svg/date.svg"


const Home = () => {
    return (
        <main>
            <div className="container home">
                <aside className='aside'>
                    <div className='aside__block'>
                        <ul className='aside__block__list'>
                            <li className="aside__block__logo"><img src={asideLogo} alt="logo" /></li>
                            <li className='aside__block__links'>
                                <img src={home} alt="" />
                                <p className='active--link'>Home</p>
                            </li>
                            <li className='aside__block__links'>
                                <img src={hash} alt="" />
                                <p>Explore</p>
                            </li>
                            <li className='aside__block__links'>
                                <img src={notif} alt="" />
                                <p>Notifications</p>
                            </li>
                            <li className='aside__block__links'>
                                <img src={message} alt="" />
                                <p>Messages</p>
                            </li>
                            <li className='aside__block__links'>
                                <img src={book} alt="" />
                                <p>Bookmarks</p>
                            </li>
                            <li className='aside__block__links'>
                                <img src={list} alt="" />
                                <p>Lists</p>
                            </li>
                            <li className='aside__block__links'>
                                <img src={prof} alt="" />
                                <p>Profile</p>
                            </li>
                            <li className='aside__block__links'>
                                <img src={more} alt="" />
                                <p>More</p>
                            </li>
                        </ul>
                        <button className='aside__block__btn'>Tweet</button>
                    </div>
                </aside>

                <section className='section'>
                <div className="section__block" style={{height: "150vh"}}>
                    <div className="header__block">
                        <h3 className="section__title">Home</h3>
                        <img src={stars} alt="" />
                    </div>

                    <div className="section__message">
                        <img className='section__img' src={pic1} alt="" />
                        <span className='section__chat'>
                            <input className='section__input' type="text" placeholder='What’s happening'/>
                            <div className="section__icons">
                                <img className='icon' src={img} alt="" />
                                <img className='icon' src={gif} alt="" />
                                <img className='icon' src={status} alt="" />
                                <img className='icon' src={smile} alt="" />
                                <img className='icon' src={date} alt="" />
                            </div>
                            <button className='section__btn'>Tweet</button>
                        </span>
                    </div>
                </div>
                </section>

                <aside className='aside2'>
                    <div className="aside__block__2">
                        <input type="search" className='aside__search' placeholder='Search Twitter'/>
                        <div className='aside__news'>
                            <div className='aside__news__card'>
                                <h3 className='aside__news__title'>Trends for you</h3>
                                <img src={sett} alt="" />
                            </div>
                            <div>
                                <div className='aside__news__card'>
                                    <span>
                                        <p className='aside__news__desc'>Trending in Germany</p>
                                        <h5 className='aside__news__news'>Revolution</h5>
                                        <p className='aside__news__desc'>50.4K Tweets</p>
                                    </span>
                                    <img src={dot} alt="" />
                                </div>
                                <div className='aside__news__card'>
                                    <span>
                                        <p className='aside__news__desc'>Trending in Germany</p>
                                        <h5 className='aside__news__news'>Revolution</h5>
                                        <p className='aside__news__desc'>50.4K Tweets</p>
                                    </span>
                                    <img src={dot} alt="" />
                                </div>
                                <div className='aside__news__card'>
                                    <span>
                                        <p className='aside__news__desc'>Trending in Germany</p>
                                        <h5 className='aside__news__news'>Revolution</h5>
                                        <p className='aside__news__desc'>50.4K Tweets</p>
                                    </span>
                                    <img src={dot} alt="" />
                                </div>
                            </div>

                            <p className='aside__news__link'>Show more</p>
                        </div>

                        <div className="aside__news">
                                <div className="aside__news__card">
                                    <p className="aside__news__title">You might like</p>
                                </div>

                                <div className="profile">
                                    <img className='profile__img' src={prof1} alt="" />
                                    <span>
                                        <p className='profile__name'>Mushtariy</p>
                                        <p className='profile__nikname'>@Mushtar565266</p>
                                    </span>
                                    <button className='profile__btn'>Follow</button>
                                </div>

                                <div className="profile">
                                    <img className='profile__img' src={prof2} alt="" />
                                    <span>
                                        <p className='profile__name'>Shuhratbek</p>
                                        <p className='profile__nikname'>@mrshukhrat</p>
                                    </span>
                                    <button className='profile__btn'>Follow</button>
                                </div>

                                <p className='aside__news__link'>Show more</p>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}

export default Home;

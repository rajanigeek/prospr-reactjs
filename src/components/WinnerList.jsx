import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const WinnerList = (props) => {
    return (
        <>
            <div className="winner_list_box">
                <div className="winner_box_left">
                    <Swiper spaceBetween={0} slidesPerView={1} modules={[Navigation]} navigation={true}>
                        {props.WinnerSliderData.map((data, index) => {
                            return (
                                <SwiperSlide key={`image${index}`}>
                                    <div
                                        className="winner_box_img back_img"
                                        style={{
                                            backgroundImage: `url(${data.image})`,
                                        }}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>

                <div className="winner_box_right">
                    <div className="winner_box_text">
                        <span className="winner_won big_text">Won on...</span>
                        <h3 className="winner_box_title h4_title">{props.title}</h3>
                        <h4 className="winner_box_subtitle h5_title">{props.subTitle}</h4>
                        <p>{props.text}</p>
                        <div className="winner_button_group">
                            <a href={props.watchDrawLink} className="sec_btn" title="Watch Draw">
                                Watch Draw
                            </a>
                            <a href={props.downloadLink} className="link_btn" title="Download Draw List">
                                Download Draw List
                            </a>
                        </div>
                    </div>

                    <div
                        className="winner_img back_img"
                        style={{
                            backgroundImage: `url(${props.winnerImage})`,
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default WinnerList;

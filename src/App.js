import WinnerList from "./components/WinnerList";
import { WinnerData } from "./components/WinnerData";

const App = () => {
    return (
        <>
            <section className="winner_sec">
                <div className="container_fluid">
                    <h2 className="h2_title text_center">
                        Our Lucky <span>Winners</span>
                    </h2>

                    {WinnerData.map((data) => {
                        return (
                            <WinnerList
                                key={data.id}
                                title={data.title}
                                subTitle={data.subTitle}
                                text={data.text}
                                watchDrawLink={data.watchDrawLink}
                                downloadLink={data.downloadLink}
                                winnerImage={data.winnerImage}
                                WinnerSliderData={data.WinnerSliderData}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default App;

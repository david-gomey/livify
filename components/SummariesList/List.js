import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '../../components/Card';

export default ({ summaries }) => {
    return (
        <React.Fragment>
            <div className="containerRoot">
                <ul className="list">
                    {summaries.map((summary, index) => (
                        <li className="list-item" key={index}>
                            <Card summary={summary} />
                        </li>
                    ))}
                </ul>
            </div>
            <style jsx>{`
                .containerRoot {
                    width: 100%;
                    box-sizing: border-box;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 10px;
                }

                .list {
                    width: calc(100% + 16px);
                    margin: -8px;
                    justify-content: center;
                    display: flex;
                    flex-wrap: wrap;
                    box-sizing: border-box;
                    list-style-type: none;
                    padding: 0;
                }

                .list-item {
                    flex-grow: 0;
                    max-width: 24%;
                    flex-basis: 24%;
                    padding: 5px;
                }

                @media (min-width: 1280px) {
                    .containerRoot {
                        max-width: 1280px;
                    }
                }

                @media (min-width: 960px) {
                    .containerRoot {
                        padding-left: 32px;
                        padding-right: 32px;
                    }
                }
            `}</style>
        </React.Fragment>
    );
};

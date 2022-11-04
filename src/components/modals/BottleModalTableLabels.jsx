import { ClassNames} from "../utils/UtilFunctions";

export default function BottleModalTableLabels({ data }) {
    return (
        <div className="font-semibold">
            {data.tableLabels.map((label, index) => {
                return (
                    <div key={index}>
                        {[
                            label.wartoscOdzywcza,
                            label.wartoscEnergetyczna,
                            label.tluszcz,
                            label.wTymKwasyNasycone,
                            label.weglowodany,
                            label.wTymCukry,
                            label.bialko,
                            label.sol,
                            label.witaminaC,
                        ]
                            .filter((value) => !!value)
                            .map((label, index) => (
                                <p
                                    className={ClassNames(
                                        'pl-2 w-full',
                                        index % 2 ? 'bg-primary' : ''
                                    )}
                                    key={index}
                                >
                                    {label}
                                </p>
                            ))}
                        {/* {[ */}
                        {/*  label.kationy, */}
                        {/*  label.wapniowy, */}
                        {/*  label.magnezowy, */}
                        {/*  label.sodowy, */}
                        {/*  label.potasowy, */}
                        {/*  label.aniony, */}
                        {/*  label.wodoroweglanowy, */}
                        {/*  label.siarczanowy, */}
                        {/*  label.chlorkowy, */}
                        {/*  label.fluorkowy, */}
                        {/*  label.suma */}
                        {/* ].filter(value => !!value).map((label, index) => ( */}
                        {/*  <p className={ClassNames( */}
                        {/*    'pl-2 w-full', */}
                        {/*    index % 2 === 0 ? 'bg-cyan-300' : '' */}
                        {/*  )} key={index}>{label}</p> */}
                        {/* ))} */}

                        {label.kationy && (
                            <p className="w-full bg-cyan-300 pl-2">{label.kationy}</p>
                        )}
                        {label.wapniowy && (
                            <p className="w-full pl-2">
                                {label.wapniowy} Ca<sup>2+</sup>
                            </p>
                        )}
                        {label.magnezowy && (
                            <p className="w-full bg-cyan-300 pl-2">
                                {label.magnezowy} Mg<sup>2+</sup>
                            </p>
                        )}
                        {label.sodowy && (
                            <p className="w-full pl-2">
                                {label.sodowy} Na<sup>+</sup>
                            </p>
                        )}
                        {label.potasowy && (
                            <p className="w-full bg-cyan-300 pl-2">
                                {label.potasowy} K<sup>+</sup>
                            </p>
                        )}
                        {label.aniony && <p className="w-full pl-2">{label.aniony}</p>}
                        {label.wodoroweglanowy && (
                            <p className="w-full bg-cyan-300 pl-2">
                                {label.wodoroweglanowy} HCO<sub>3</sub>
                                <sup>-</sup>
                            </p>
                        )}
                        {label.siarczanowy && (
                            <p className="w-full pl-2">
                                {label.siarczanowy} SO<sub>4</sub>
                                <sup>2-</sup>
                            </p>
                        )}
                        {label.chlorkowy && (
                            <p className="w-full bg-cyan-300 pl-2">
                                {label.chlorkowy} Cl<sup>-</sup>
                            </p>
                        )}
                        {label.fluorkowy && (
                            <p className="w-full pl-2">
                                {label.fluorkowy} F<sup>-</sup>
                            </p>
                        )}
                        {label.suma && (
                            <p className="w-full bg-cyan-300 pl-2">{label.suma}</p>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

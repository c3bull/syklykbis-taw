import { ClassNames} from "../utils/UtilFunctions";


export default function BottleModalTableValues({ data }) {
    return (
        <div className="select-none font-semibold">
            {data.tableValues.map((value, index) => {
                return (
                    <div key={index}>
                        {[
                            value.wartoscOdzywcza,
                            value.wartoscEnergetyczna,
                            value.tluszcz,
                            value.wTymKwasyNasycone,
                            value.weglowodany,
                            value.wTymCukry,
                            value.bialko,
                            value.sol,
                            value.witaminaC,
                        ]
                            .filter((value) => !!value)
                            .map((productValue, index) => (
                                <p
                                    className={ClassNames(
                                        'pl-2 w-full pr-2 text-right',
                                        index % 2 ? 'bg-primary' : ''
                                    )}
                                    key={index}
                                >
                                    {productValue}
                                </p>
                            ))}
                        {[
                            value.kationy,
                            value.wapniowy,
                            value.magnezowy,
                            value.sodowy,
                            value.potasowy,
                            value.aniony,
                            value.wodoroweglanowy,
                            value.siarczanowy,
                            value.chlorkowy,
                            value.fluorkowy,
                            value.suma,
                        ]
                            .filter((value) => !!value)
                            .map((productValue, index) => (
                                <p
                                    className={ClassNames(
                                        'pl-2 w-full pr-2 text-right',
                                        index % 2 === 0 ? 'bg-cyan-300' : '',
                                        productValue.localeCompare('.') === 0
                                            ? 'text-transparent'
                                            : ''
                                    )}
                                    key={index}
                                >
                                    {productValue}
                                </p>
                            ))}
                    </div>
                );
            })}
        </div>
    );
}

import {useUser} from '@auth0/nextjs-auth0';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

import {NotLoggedModal} from "../components/modals/NotLoggedModal";
import {Prices} from "../components/prices/Prices";

const PricesPage = () => {
    const {user} = useUser();
    const [showModal, setShowModal] = useState(-1);
    const navigate = useNavigate();

    return (
        <div>
            {!user && showModal === -1 && (
                <NotLoggedModal
                    onClickClose={() => {
                        setShowModal(1);
                    }}
                    onClickLogin={() => {
                        navigate('/api/auth/login');
                    }}
                    message="Aby móc zobaczyć ceny, musisz się zalogować"
                />
            )}

            <div className="flex justify-center">
                <div className="flex w-2/3 flex-col justify-center">
                    <div className="grid gap-6 pt-32 pb-16">
                        <Prices
                            category="non_carb_drink"
                            title="napoje niegazowane"
                            color="via-orange-100"
                            classes="xl:grid-cols-4"
                        />
                        <Prices
                            category="carb_drink"
                            title="napoje gazowane"
                            color="via-yellow-100"
                            classes="xl:grid-cols-4"
                        />
                        <Prices
                            category="juices"
                            title="soki i nektary"
                            color="via-red-100"
                            classes="xl:grid-cols-4"
                        />
                        <Prices category="bogus" title="boguś" color="via-orange-100"/>
                        <Prices
                            category="water"
                            title="woda źródlana"
                            color="via-cyan-100"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricesPage;

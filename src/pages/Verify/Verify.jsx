import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Button from '~/components/Button';

import * as VeryfiServices from '~/services/VeryfiServices';

function Verify() {
    const [searchParams] = useSearchParams();

    let uidb64 = searchParams.get('uidb64');
    let token = searchParams.get('token');

    useEffect(() => {
        const loadChapter = async () => {
            const fromData = { uidb64: uidb64, token: token };
            const res = await VeryfiServices.Veryfi(fromData);
        };

        loadChapter();
    }, []);
    return (
        <div style={{ marginBottom: 336 }}>
            <h1>Chúc mừng bạn đã ký hoạt tài khoản thành công</h1>
            <Button
                style={{
                    cursor: 'pointer',
                    color: '#007bff',
                }}
                to={`/`}
            >
                Về trang chủ
            </Button>
        </div>
    );
}

export default Verify;

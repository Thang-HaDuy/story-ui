import Button from '~/components/Button';

function CheckMail() {
    return (
        <div style={{ marginBottom: 336 }}>
            <h1>Xác nhận email của bạn</h1>
            <Button
                style={{
                    cursor: 'pointer',
                    color: '#007bff',
                }}
                href={`https://mail.google.com/mail/u/0/#inbox`}
            >
                Check mail
            </Button>
        </div>
    );
}

export default CheckMail;

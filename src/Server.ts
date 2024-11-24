import App from './App';

const PORT = parseInt(process.env.APP_PORT)

const SERVER = App.listen(PORT, () => {
    console.log(`+ ${process.env.APP_NAME} running on port ${PORT}`)
});

SERVER.on('SIGINT', () => {
    console.log('Closing server...');
    SERVER.close(() => {
        console.log('Server closed. Port released.');
        process.exit(0);
    });
});
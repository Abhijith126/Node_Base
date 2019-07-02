import contactRoutes from './modules/contacts/contactsAPI';

const routes = app => {
    app.get('/', (req, res) => res.status(200).json({ status: 'Active' }));
    app.use('/contacts', contactRoutes);
};

export default routes;

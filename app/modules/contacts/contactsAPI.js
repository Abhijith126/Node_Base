// import adaptRequest from '../../util/adapt-request';

const contactsController = (req, res) => {
    // const httpRequest = adaptRequest(req);
    res.status(200).json({ status: 'Contacts' });
};

export default contactsController;

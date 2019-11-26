import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/b2w', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

export default mongoose;

import jwt from 'jsonwebtoken'

const authMiddlewares = (req, res, next) => {
    try {
        const token = req.cookies?.token
        if(!token) {
            return res.status(401).json({
                success: false,
                message: 'Authentication required'
            });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        req.user= decoded;
        next();

    } catch (error) {
        return res.status(401).json({
            message: 'Invalid or expired token',
            success: false
        });
    }
};

export default authMiddlewares
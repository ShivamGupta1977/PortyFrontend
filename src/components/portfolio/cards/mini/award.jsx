import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

const MiniCard = (props) => {
    const { title, items, handleDialogOpen } = props;

    return (
        <Card className="portfolioExtraCard">
            <div className="portfolioExtraDetails">
                <CardContent className="portfolioExtraContent">
                    <Typography
                        component="h5"
                        variant="h5"
                        style={{ textTransform: 'capitalize' }}
                    >
                        {title}
                    </Typography>
                    {items.map((item, i) => (
                        <Chip
                            className="chip"
                            variant="outlined"
                            label={item.title}
                            onClick={() => handleDialogOpen(title, item)}
                            key={i}
                        />
                    ))}
                </CardContent>
            </div>
            <div className="portfolioExtraImage miniAwardImage" />
        </Card>
    );
};

MiniCard.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf.isRequired,
    handleDialogOpen: PropTypes.func.isRequired,
};

export default MiniCard;

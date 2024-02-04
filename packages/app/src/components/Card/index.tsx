import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';


export interface MonsterCardProps {
    id?: number,
    name: string;
    level: number;
    type: {
        species?: string;
        subspecies?: string;
    },
    image?: string,
    deleteMonster?: () => void

}
const ActionAreaCard: React.FC<MonsterCardProps> = ({ name, level, type: { species, subspecies }, image, deleteMonster }) => {

    return (
        <Card>

            <CardMedia
                component="img"
                height="140"
                image={image !== 'string' ? image : 'https://placehold.co/600x400?text=MONSTER'}
                alt={name}
            />
            <CardContent sx={{ backgroundColor: '#bfa77f', display: 'flex', flexDirection: 'column' }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#2e2e2e' }}>
                    {name}
                </Typography>
                <Typography variant="body1" sx={{ color: '#2e2e2e' }}>
                    {`${species} ${subspecies ? `(${subspecies})` : ''}`}
                </Typography>
                <Typography variant="body2" sx={{ color: '#2e2e2e' }}>
                    {`Level: ${level}`}
                </Typography>

                {deleteMonster && <Button sx={{ marginLeft: 'auto', }} variant='contained' color='error'
                    onClick={deleteMonster}>
                    <SvgIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </SvgIcon>

                </Button>
                }
            </CardContent>

        </Card>
    );
}

export default ActionAreaCard;
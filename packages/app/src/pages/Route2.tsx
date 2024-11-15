import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Card, { MonsterCardProps } from '../components/Card';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Suspense } from 'react';
import { json } from 'react-router-dom';

const Route2 = () => {
    const [monstersObject, setMonstersObject] = useState<MonsterCardProps[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    useEffect(() => {
        loadMonsters().then(data => { setMonstersObject(data) });
    }, []);

    const totalItems = monstersObject.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    const handleItemsPerPageChange = (event: SelectChangeEvent) => {
        setItemsPerPage(Number(event.target.value));
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const deleteMonster = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:3005/api/monster/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log('Monster deleted successfully');
                setMonstersObject(monstersObject.filter((monster) => monster.id !== id));
            } else {
                console.error('Failed to delete monster');
            }
        } catch (error) {
            console.error('Failed to delete monster:', error);
        }
    };

    return (
        <>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} minHeight={'90vh'}>
                <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                    <>
                        {monstersObject.slice(startIndex, endIndex).map((item: MonsterCardProps, index: number) => (
                            <Grid xs={2} sm={4} md={4} key={index} margin={'20px 0'}>
                                <Card
                                    id={item.id}
                                    name={item.name}
                                    level={item.level}
                                    type={{ species: item.type?.species, subspecies: item.type?.subspecies }}
                                    image={item?.image}
                                    deleteMonster={() => deleteMonster(item.id as number)}
                                />
                            </Grid>
                        ))}
                    </>
                </Suspense>
            </Grid>
            <Container>
                <Stack sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginBottom: '20px', flexDirection: 'row', gap: '20px' }}>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handleChange}
                        color="primary"
                        size="large"
                        showFirstButton
                        showLastButton
                        sx={{
                            '& .MuiPaginationItem-root.Mui-selected': {
                                backgroundColor: '#bfa77f',
                            },
                            '& .MuiPaginationItem-root.Mui-selected:hover': {
                                backgroundColor: '#bfa77f',
                            },
                            color: '#2e2e2e',
                        }}
                    />

                    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                        <InputLabel id="demo-select-small-label">Select the number of items per page</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={itemsPerPage.toString()}
                            label="Age"
                            onChange={handleItemsPerPageChange}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        '& .MuiMenuItem-root': {
                                            '&:hover': {
                                                backgroundColor: '#bfa77f',
                                            },
                                            '&.Mui-selected': {
                                                backgroundColor: '#bfa77f',
                                                color: '#2e2e2e',
                                            },
                                            '&.Mui-selected:hover': {
                                                backgroundColor: '#bfa77f',
                                            },
                                        },
                                    }
                                }
                            }}
                        >
                            <MenuItem
                                value={6}>6</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={18}>18</MenuItem>
                        </Select>
                    </FormControl>

                </Stack>
            </Container>
        </>
    )
}

export async function loadMonsters() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/monster`);

    if (!response.ok) {
        throw json({ message: 'Could not fetch monsters.' }, { status: 500 });
    } else {
        const resData = await response.json();
        return resData;
    }
}

export default Route2;

import React, { useState } from 'react'
import { Typography, Button, Stack, Box, TextField, Container, Autocomplete, Paper } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup';

import 'src/App.css'

import LandingPageLayout from 'src/layouts/LandingPageLayout';

import axiosInstance from 'src/utils/axiosConfig';



interface Tag {
  tagsId: string;
  tagsName: string;
}

interface SearchTagsValue {
  tagsName: string;
}

function LandingPage() {
 
  const [popularTags, setPopularTags] = React.useState<Array<Tag>>([]);
  const [tagList, setTagList] = React.useState<Array<Tag>>([]);
  const [search, setSearch] = useState('');

  const getPopularTags = async () => {
    axiosInstance.get('/tags-management/popular-tags-option-lists')
    .then(response => {
      setPopularTags(response.data.data);
      //console.log(response.data.data);
    })
    .catch(error => {
      console.error(error);
    }) 
  }

  React.useEffect(() => {
    getPopularTags();
  }, []);

  const searchTags = async () => {
    axiosInstance.get(`/tags-management/tags-option-lists`, {
      params: {
        tagsName: search
      }
    })
    .then(response => {
      setTagList(response.data.data);
      //console.log(response.data.data);
    })
    .catch(error => {
      console.error(error);
    }) 
  }

  const formik = useFormik({
    initialValues: {
      tags: [],
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <LandingPageLayout>
      <Container maxWidth="md" sx={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width:"100%"}}>
        <Typography variant="h3" color="secondary" fontWeight={600} textAlign="center">
          Welcome to
        </Typography>
        <Typography variant="h3" color="secondary" fontWeight={600} textAlign="center">
          Talent Center 79
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center">
        <Autocomplete
          sx={{width: "100%", margin: 4, backgroundColor: "#FDFDFD", borderRadius: "36px"}}
          multiple
          id="tags-outlined"
          options={tagList}
          getOptionLabel={(tag) => tag.tagsName}
          getOptionKey={(tag) => tag.tagsId}
          value={formik.values.tags}
          onChange={(event, newValue) => {
            formik.setFieldValue('tags', newValue);
            console.log(formik.values.tags);
          }}
          isOptionEqualToValue={(tag, value) => tag.tagsId === value.tagsId}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{ ...params.InputProps, sx: {borderRadius: "36px"} }}
              onChange={(event) => {
                setSearch(event.target.value);
                searchTags();
              }}
              placeholder='Try "Javascript"'
            />
          )}
        />
          <Typography color="secondary" variant='h6' marginBottom={2} display={{md: "none"}}>
              Popular
            </Typography>
          <Stack direction="row" spacing={2} rowGap={2} flexWrap="wrap">
            <Typography color="secondary" variant='h6' display={{xs: "none", md:"flex"}}>
              Popular
            </Typography>
            {
              Array.isArray(popularTags) &&
              popularTags?.map((tag) => (
                <Button key={tag.tagsId} color="secondary" variant="contained" 
                  sx={{
                    "&.Mui-disabled": {
                      background: "#eaeaea",
                      color: "#b0b0b0"
                    }
                  }}
                  disabled={formik.values.tags.some(({tagsId} : Tag) => tagsId === tag.tagsId)}
                  onClick={() => {
                    formik.setFieldValue("tags", [...formik.values.tags, tag])
                  }}
                >
                  {tag.tagsName}
                </Button>
              ))
            }
          </Stack>
        </Box> 
      </Container>
    </LandingPageLayout>
  )
}

export default LandingPage

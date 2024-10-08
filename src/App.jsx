import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Uploader } from "uploader"; 
import { UploadButton } from "react-uploader";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
  TERipple,
} from "tw-elements-react";
const uploader = Uploader({
  apiKey: "free" 
});
const options = { multi: true };

function App() {
  return (
    <>
    <div className='bg-gradient-to-r from-black to-[#0718fb] text-white bg-cover h-[729px]'>
    <nav className='bg-green-400 h-[60px]  '></nav>
    <div className='text-center border-4 rounded-xl border-green-400 w-[500px] h-[500px] text-3xl my-[70px] mx-[500px] '>
      <div className='flex justify-between mx-[20px] my-[30px]'>
        <div>Event</div>
      <div className='bg-white text-black'>
      <TEDropdown className="flex justify-center">
      <TERipple rippleColor="light">
        <TEDropdownToggle
          tag="a"
          className="flex items-center w-[340px]"
        >
          Events
        </TEDropdownToggle>
      </TERipple>

      <TEDropdownMenu>
        <TEDropdownItem>
          <a href="#" className="block w-[160px] text-2xl">
            Event 1
          </a>
        </TEDropdownItem>
        <TEDropdownItem>
          <a href="#" className="block w-[160px] text-2xl">
            Event 2
          </a>
        </TEDropdownItem>
        <TEDropdownItem>
          <a href="#" className="block w-[160px] text-2xl">
            Event 3
          </a>
        </TEDropdownItem>
        <TEDropdownItem>
          <a href="#" className="block w-[160px] text-2xl">
            Event 4
          </a>
        </TEDropdownItem>
      </TEDropdownMenu>
    </TEDropdown>
      </div>
      </div>
      <div className='flex justify-between mx-[20px] my-[30px]'>
      <div>Name</div>
      <div>
      <Form.Control
        type="name"
        id="name"
        aria-describedby="passwordHelpBlock"
      />
      </div>
      </div>
      <div className='flex justify-between mx-[20px] my-[30px]'>
      <div>Poster</div>
      <div className='bg-white text-black text-xl w-[340px]'>
      <UploadButton uploader={uploader}
                options={options}
                onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}>
    {({onClick}) =>
      <button onClick={onClick}>
        Upload a file
      </button>
    }
  </UploadButton>
      </div>
      </div>
      <div className='flex justify-between mx-[20px] my-[30px]'>
      <div>Venue</div>
      <div>
      <Form.Control
        type="name"
        id="name"
        aria-describedby="passwordHelpBlock"
      />
      </div>
      </div>
      <div className='flex justify-between mx-[20px] my-[30px] '>
      <div>Time</div>
      <div className='bg-white text-black  w-[340px]'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker label="Basic date time picker" />
      </DemoContainer>
    </LocalizationProvider>
      </div>
      </div>
      <button className='bg-green-400 rounded w-[120px] h-[45px] my-[20px]'>Update</button>
    </div>
    <footer></footer>
    </div>
    </>
  )
}

export default App

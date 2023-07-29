const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  total: 0,
  processor: null,
  motherboard: null,
  ram: null,
  powerSupply: null,
  storageDevice: null,
  monitor: null,
  other: null,
};

const pcBuilderSlice = createSlice({
  name: "pcBuild",
  initialState,
  reducers: {
    addProcessor: (state, action) => {
      if (state.processor) {
        state.total -= state.processor.price;
      }
      state.total += action.payload.price;
      state.processor = action.payload;
    },
    removeProcessor: (state) => {
      state.total -= state.processor.price;
      state.processor = null;
    },
    addMotherboard: (state, action) => {
      if (state.motherboard) {
        state.total -= state.motherboard.price;
      }
      state.total += action.payload.price;
      state.motherboard = action.payload;
    },
    removeMotherboard: (state) => {
      state.total -= state.motherboard.price;
      state.motherboard = null;
    },
    addRam: (state, action) => {
      if (state.ram) {
        state.total -= state.ram.price;
      }
      state.total += action.payload.price;
      state.ram = action.payload;
    },
    removeRam: (state) => {
      state.total -= state.ram.price;
      state.ram = null;
    },
    addPowerSupply: (state, action) => {
      if (state.powerSupply) {
        state.total -= state.powerSupply.price;
      }
      state.total += action.payload.price;
      state.powerSupply = action.payload;
    },
    removePowerSupply: (state) => {
      state.total -= state.powerSupply.price;
      state.powerSupply = null;
    },
    addStorageDevice: (state, action) => {
      if (state.storageDevice) {
        state.total -= state.storageDevice.price;
      }
      state.total += action.payload.price;
      state.storageDevice = action.payload;
    },
    removeStorageDevice: (state) => {
      state.total -= state.storageDevice.price;
      state.storageDevice = null;
    },
    addMonitor: (state, action) => {
      if (state.monitor) {
        state.total -= state.monitor.price;
      }
      state.total += action.payload.price;
      state.monitor = action.payload;
    },
    removeMonitor: (state) => {
      state.total -= state.monitor.price;
      state.monitor = null;
    },
    buildCompleted: (state) => {
      state.processor = null;
      state.motherboard = null;
      state.ram = null;
      state.powerSupply = null;
      state.storageDevice = null;
      state.monitor = null;
      state.total = 0;
    },
  },
});

export const {
  addProcessor,
  removeProcessor,
  addMotherboard,
  removeMotherboard,
  addRam,
  removeRam,
  addPowerSupply,
  removePowerSupply,
  addStorageDevice,
  removeStorageDevice,
  addMonitor,
  removeMonitor,
  buildCompleted,
} = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;

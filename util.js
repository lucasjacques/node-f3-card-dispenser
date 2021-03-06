const Util = {
    laneStatus: {
        '48': 'NO_CARD_IN',
        '49': 'CARD_AT_GATE_POS',
        '50': 'CARD_IN_THE_MIDDLE'
    },

    fullCaptureBox: {
        '0': 'CAPTURE_BOX_NOT_FULL',
        '1': 'CAPTURE_BOX_FULL'
    },

    cardBoxStatus: {
        '48': 'CARD_BOX_EMPTY',
        '49': 'CARD_BOX_INSUFFICIENT',
        '50': 'CARD_BOX_ENOUGH'
    },

    msgMapper: {
        '0': 'SUCCESS',
        '12288': 'PORT_UNAVAILABLE',
        '12290': 'DEV_NOT_RECOGNIZED',
        '12304': 'COMM_ERROR',
        '12305': 'COMM_TIMEOUT',
        '12321': 'UNKNOWN_ERROR',
        '16400': 'MESSAGE_TOO_LONG',
        '16416': 'NO_MEMORY',
        '16384': 'BUFFER_TOO_SMALL',
        '16385': 'INVALID_HANDLE',
        '19968': 'UNDEFINED_COMMAND',
        '19969': 'INVALID_PARAMETER',
        '19970': 'DISABLED_COMMAND',
        '19971': 'UNSUPPORTED_COMMAND',
        '19973': 'CONTACT_NO_RELEASE',
        '19984': 'CARD_JAMMED',
        '19986': 'SENSOR_ABNORMALITY',
        '19987': 'TOO_LONG_CARD',
        '19988': 'TOO_SHORT_CARD',
        '20032': 'CARD_WITHDRAWN',
        '20033': 'IC_SOLENOID_ERROR',
        '20035': 'CANT_MOVED_TO_IC_POS',
        '20037': 'CARD_POSITION_CHANGE',
        '20048': 'COUNTER_OVERFLOW',
        '20049': 'MOTOR_ABNORMALITY',
        '20064': 'POWER_SHORT',
        '20065': 'ICC_ACTIVATION_ERROR',
        '20069': 'ICC_NOT_ACTIVATED',
        '20070': 'UNSUPPORTED_ICC',
        '20071': 'ICC_RECEPTION_ERROR',
        '20072': 'ICC_COMM_TIMEOUT',
        '20073': 'MISMATCH_EMV',
        '20129': 'CARD_BOX_EMPTY',
        '20130': 'CAPTURE_BOX_FULL',
        '20144': 'WAITING_FOR_RESET',
        '28416': 'COMMAND_FAILURE',
        '28417': 'DISAGREEMENT_OF_VC',
        '28418': 'CARD_LOCKED',
        '27392': 'ADDRESS_OVERFLOW',
        '26368': 'LENGTH_OVERFLOW'
    }
}

module.exports = Util;
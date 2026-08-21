export const DashboardModules = {
    PATIENTS: 'patients',
    DOCTORS: 'doctors',
    APPOINTMENTS: 'appointments',
    APPOINTMENT_REQUESTS: 'appointmentRequests',
    REFILL_REQUESTS: 'refillRequests',
    INVENTORY: 'inventory',
    REPLENISHMENT: 'replenishment',
    AUDIT_LOGS: 'auditLogs'
}

export type DashboardModule = typeof DashboardModules[keyof typeof DashboardModules];
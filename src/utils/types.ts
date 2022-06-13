export interface Friends{
    friend : Friend[]
}


export interface Friend {
    id:        string;
    name:      string;
    jobStatus: string;
    image:     string;
    createdAt: Date;
    updatedAt: Date;
}
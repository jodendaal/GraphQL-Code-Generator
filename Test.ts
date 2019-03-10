interface QueryType { 
    Content : Content[];
    Link : Link[];
    Tag : Tag[];
    Tweet : Tweet[];
    User : User[];
    Repository : Repository[];
    Question : Question[];
    Answer : Answer[];
    Group : Group[];
    Event : Event[];
    Venue : Venue[];
    
    } 
    
    interface Content { 
    _id : number;
    id : any;
    title : string;
    created : number;
    tags : Tag[];
    
    } 
    
    interface Tag { 
    _id : number;
    name : any;
    tagged : Content[];
    related : Tag[];
    
    } 
    
    enum _ContentOrdering { 
    id_asc ,
    id_desc ,
    title_asc ,
    title_desc ,
    created_asc ,
    created_desc ,
    
    } 
    
    enum _TagOrdering { 
    name_asc ,
    name_desc ,
    
    } 
    
    interface Link { 
    _id : number;
    url : any;
    score : number;
    referrer : Content[];
    
    } 
    
    enum _LinkOrdering { 
    url_asc ,
    url_desc ,
    score_asc ,
    score_desc ,
    
    } 
    
    interface Tweet { 
    _id : number;
    id : any;
    title : string;
    text : string;
    created : number;
    favorites : number;
    reply : any;
    retweeted : any;
    postedBy : any;
    mentioned : User[];
    tags : Tag[];
    links : Link[];
    
    } 
    
    enum _TweetOrdering { 
    id_asc ,
    id_desc ,
    title_asc ,
    title_desc ,
    text_asc ,
    text_desc ,
    created_asc ,
    created_desc ,
    favorites_asc ,
    favorites_desc ,
    
    } 
    
    interface User { 
    _id : number;
    id : any;
    type : string;
    reputation : number;
    screen_name : any;
    name : string;
    location : string;
    followers : number;
    following : number;
    statuses : number;
    profile_image_url : string;
    repositories : Repository[];
    questions : Question[];
    answers : Answer[];
    posted : Tweet[];
    tagged : Tag[];
    
    } 
    
    interface Repository { 
    _id : number;
    id : any;
    title : any;
    full_name : string;
    url : string;
    created : number;
    homepage : string;
    favorites : number;
    updated : number;
    pushed : number;
    size : number;
    score : any;
    watchers : number;
    language : string;
    forks : number;
    open_issues : number;
    branch : string;
    description : string;
    owner : any;
    tags : Tag[];
    
    } 
    
    enum _UserOrdering { 
    id_asc ,
    id_desc ,
    type_asc ,
    type_desc ,
    reputation_asc ,
    reputation_desc ,
    screen_name_asc ,
    screen_name_desc ,
    name_asc ,
    name_desc ,
    location_asc ,
    location_desc ,
    followers_asc ,
    followers_desc ,
    following_asc ,
    following_desc ,
    statuses_asc ,
    statuses_desc ,
    profile_image_url_asc ,
    profile_image_url_desc ,
    
    } 
    
    enum _RepositoryOrdering { 
    id_asc ,
    id_desc ,
    title_asc ,
    title_desc ,
    full_name_asc ,
    full_name_desc ,
    url_asc ,
    url_desc ,
    created_asc ,
    created_desc ,
    homepage_asc ,
    homepage_desc ,
    favorites_asc ,
    favorites_desc ,
    updated_asc ,
    updated_desc ,
    pushed_asc ,
    pushed_desc ,
    size_asc ,
    size_desc ,
    score_asc ,
    score_desc ,
    watchers_asc ,
    watchers_desc ,
    language_asc ,
    language_desc ,
    forks_asc ,
    forks_desc ,
    open_issues_asc ,
    open_issues_desc ,
    branch_asc ,
    branch_desc ,
    description_asc ,
    description_desc ,
    
    } 
    
    interface Question { 
    _id : number;
    id : any;
    title : string;
    link : string;
    score : number;
    text : string;
    closed_date : number;
    closed_reason : string;
    comment_count : number;
    favorites : number;
    view_count : number;
    is_answered : any;
    created : number;
    updated : number;
    answers : Answer[];
    author : any;
    tags : Tag[];
    
    } 
    
    interface Answer { 
    _id : number;
    id : any;
    title : string;
    text : string;
    comment_count : number;
    is_accepted : any;
    created : number;
    score : number;
    question : any;
    author : any;
    tags : Tag[];
    
    } 
    
    enum _QuestionOrdering { 
    id_asc ,
    id_desc ,
    title_asc ,
    title_desc ,
    link_asc ,
    link_desc ,
    score_asc ,
    score_desc ,
    text_asc ,
    text_desc ,
    closed_date_asc ,
    closed_date_desc ,
    closed_reason_asc ,
    closed_reason_desc ,
    comment_count_asc ,
    comment_count_desc ,
    favorites_asc ,
    favorites_desc ,
    view_count_asc ,
    view_count_desc ,
    is_answered_asc ,
    is_answered_desc ,
    created_asc ,
    created_desc ,
    updated_asc ,
    updated_desc ,
    
    } 
    
    enum _AnswerOrdering { 
    id_asc ,
    id_desc ,
    title_asc ,
    title_desc ,
    text_asc ,
    text_desc ,
    comment_count_asc ,
    comment_count_desc ,
    is_accepted_asc ,
    is_accepted_desc ,
    created_asc ,
    created_desc ,
    score_asc ,
    score_desc ,
    
    } 
    
    interface Group { 
    _id : number;
    id : any;
    title : any;
    created : number;
    country : string;
    city : string;
    latitude : any;
    longitude : any;
    link : string;
    text : string;
    memberCount : number;
    score : any;
    key : string;
    tags : Tag[];
    members : User[];
    events : Event[];
    owners : User[];
    
    } 
    
    interface Event { 
    _id : number;
    id : any;
    title : any;
    created : number;
    past : any;
    status : string;
    rsvp_limit : number;
    yes_rsvp_count : number;
    maybe_rsvp_count : number;
    score : any;
    headcount : number;
    text : string;
    link : string;
    utc_offset : number;
    time : number;
    updated : number;
    waitlist_count : number;
    tags : Tag[];
    attendees : User[];
    owner : User[];
    venue : Venue[];
    group : any;
    
    } 
    
    interface Venue { 
    _id : number;
    id : any;
    name : string;
    address : string;
    city : string;
    country : string;
    country_name : string;
    latitude : any;
    longitude : any;
    events : Event[];
    
    } 
    
    enum _EventOrdering { 
    id_asc ,
    id_desc ,
    title_asc ,
    title_desc ,
    created_asc ,
    created_desc ,
    past_asc ,
    past_desc ,
    status_asc ,
    status_desc ,
    rsvp_limit_asc ,
    rsvp_limit_desc ,
    yes_rsvp_count_asc ,
    yes_rsvp_count_desc ,
    maybe_rsvp_count_asc ,
    maybe_rsvp_count_desc ,
    score_asc ,
    score_desc ,
    headcount_asc ,
    headcount_desc ,
    text_asc ,
    text_desc ,
    link_asc ,
    link_desc ,
    utc_offset_asc ,
    utc_offset_desc ,
    time_asc ,
    time_desc ,
    updated_asc ,
    updated_desc ,
    waitlist_count_asc ,
    waitlist_count_desc ,
    
    } 
    
    enum _VenueOrdering { 
    id_asc ,
    id_desc ,
    name_asc ,
    name_desc ,
    address_asc ,
    address_desc ,
    city_asc ,
    city_desc ,
    country_asc ,
    country_desc ,
    country_name_asc ,
    country_name_desc ,
    latitude_asc ,
    latitude_desc ,
    longitude_asc ,
    longitude_desc ,
    
    } 
    
    enum _GroupOrdering { 
    id_asc ,
    id_desc ,
    title_asc ,
    title_desc ,
    created_asc ,
    created_desc ,
    country_asc ,
    country_desc ,
    city_asc ,
    city_desc ,
    latitude_asc ,
    latitude_desc ,
    longitude_asc ,
    longitude_desc ,
    link_asc ,
    link_desc ,
    text_asc ,
    text_desc ,
    memberCount_asc ,
    memberCount_desc ,
    score_asc ,
    score_desc ,
    key_asc ,
    key_desc ,
    
    } 
    
    interface MutationType { 
    createContent : string;
    updateContent : string;
    deleteContent : string;
    createLink : string;
    updateLink : string;
    deleteLink : string;
    createTag : string;
    updateTag : string;
    deleteTag : string;
    createTweet : string;
    updateTweet : string;
    deleteTweet : string;
    createUser : string;
    updateUser : string;
    deleteUser : string;
    createRepository : string;
    updateRepository : string;
    deleteRepository : string;
    createQuestion : string;
    updateQuestion : string;
    deleteQuestion : string;
    createAnswer : string;
    updateAnswer : string;
    deleteAnswer : string;
    createGroup : string;
    updateGroup : string;
    deleteGroup : string;
    createEvent : string;
    updateEvent : string;
    deleteEvent : string;
    createVenue : string;
    updateVenue : string;
    deleteVenue : string;
    addContentTags : string;
    deleteContentTags : string;
    addLinkReferrer : string;
    deleteLinkReferrer : string;
    addTagTagged : string;
    deleteTagTagged : string;
    addTagRelated : string;
    deleteTagRelated : string;
    addTweetReply : string;
    deleteTweetReply : string;
    addTweetRetweeted : string;
    deleteTweetRetweeted : string;
    addTweetPostedBy : string;
    deleteTweetPostedBy : string;
    addTweetMentioned : string;
    deleteTweetMentioned : string;
    addTweetTags : string;
    deleteTweetTags : string;
    addTweetLinks : string;
    deleteTweetLinks : string;
    addUserRepositories : string;
    deleteUserRepositories : string;
    addUserQuestions : string;
    deleteUserQuestions : string;
    addUserAnswers : string;
    deleteUserAnswers : string;
    addUserPosted : string;
    deleteUserPosted : string;
    addUserTagged : string;
    deleteUserTagged : string;
    addRepositoryOwner : string;
    deleteRepositoryOwner : string;
    addRepositoryTags : string;
    deleteRepositoryTags : string;
    addQuestionAnswers : string;
    deleteQuestionAnswers : string;
    addQuestionAuthor : string;
    deleteQuestionAuthor : string;
    addQuestionTags : string;
    deleteQuestionTags : string;
    addAnswerQuestion : string;
    deleteAnswerQuestion : string;
    addAnswerAuthor : string;
    deleteAnswerAuthor : string;
    addAnswerTags : string;
    deleteAnswerTags : string;
    addGroupTags : string;
    deleteGroupTags : string;
    addGroupMembers : string;
    deleteGroupMembers : string;
    addGroupEvents : string;
    deleteGroupEvents : string;
    addGroupOwners : string;
    deleteGroupOwners : string;
    addEventTags : string;
    deleteEventTags : string;
    addEventAttendees : string;
    deleteEventAttendees : string;
    addEventOwner : string;
    deleteEventOwner : string;
    addEventVenue : string;
    deleteEventVenue : string;
    addEventGroup : string;
    deleteEventGroup : string;
    addVenueEvents : string;
    deleteVenueEvents : string;
    
    } 
    
    interface __Schema { 
    types : any;
    queryType : any;
    mutationType : any;
    directives : any;
    subscriptionType : any;
    
    } 
    
    interface __Type { 
    kind : any;
    name : string;
    description : string;
    fields : any[];
    interfaces : any[];
    possibleTypes : any[];
    enumValues : any[];
    inputFields : any[];
    ofType : any;
    
    } 
    
    enum __TypeKind { 
    SCALAR ,
    OBJECT ,
    INTERFACE ,
    UNION ,
    ENUM ,
    INPUT_OBJECT ,
    LIST ,
    NON_NULL ,
    
    } 
    
    interface __Field { 
    name : any;
    description : string;
    args : any;
    type : any;
    isDeprecated : any;
    deprecationReason : string;
    
    } 
    
    interface __InputValue { 
    name : any;
    description : string;
    type : any;
    defaultValue : string;
    
    } 
    
    interface __EnumValue { 
    name : any;
    description : string;
    isDeprecated : any;
    deprecationReason : string;
    
    } 
    
    interface __Directive { 
    name : string;
    description : string;
    locations : any[];
    args : any;
    onOperation : any;
    onFragment : any;
    onField : any;
    
    } 
    
    enum __DirectiveLocation { 
    QUERY ,
    MUTATION ,
    FIELD ,
    FRAGMENT_DEFINITION ,
    FRAGMENT_SPREAD ,
    INLINE_FRAGMENT ,
    SCHEMA ,
    SCALAR ,
    OBJECT ,
    FIELD_DEFINITION ,
    ARGUMENT_DEFINITION ,
    INTERFACE ,
    UNION ,
    ENUM ,
    INPUT_OBJECT ,
    INPUT_FIELD_DEFINITION ,
    
    } 
    
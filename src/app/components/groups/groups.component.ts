import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  
  avatar: string='/assets/images/group.jpg'
  groups: boolean=true
  


  groupComponents: GroupModel[] = [
    {image: "/assets/images/group.jpg", title: "ALorem Ipsum", members: "100 Members"},
    {image: "/assets/images/group.jpg", title: "Random Ipsum", members: "100 Members"},
    {image: "/assets/images/group.jpg", title: "Lorem Ipsum", members: "100 Members"},
    {image: "/assets/images/group.jpg", title: "ABLorem Ipsum", members: "100 Members"},
    {image: "/assets/images/group.jpg", title: "ABBLorem Ipsum", members: "100 Members"},
    {image: "/assets/images/group.jpg", title: "ABCLorem Ipsum", members: "100 Members"},
    {image: "/assets/images/group.jpg", title: "ABBCLorem Ipsum", members: "100 Members"},
    {image: "/assets/images/group.jpg", title: "ALorem Ipsum", members: "100 Members"},
    {image: "/assets/images/group.jpg", title: "Random Ipsum", members: "100 Members"},
    {image: "/assets/images/group.jpg", title: "Lorem Ipsum", members: "100 Members"},
    {image: "/assets/images/group.jpg", title: "ABLorem Ipsum", members: "100 Members"},
    {image: "/assets/images/group.jpg", title: "ABBLorem Ipsum", members: "100 Members"},
    {image: "/assets/images/group.jpg", title: "ABCLorem Ipsum", members: "100 Members"},
    {image: "/assets/images/group.jpg", title: "ABBCLorem Ipsum", members: "100 Members"}
  ] 
  @Input("count") count: number = this.groupComponents.length
  @Input("searchString") searchString: String = ''
  filteredGroups: GroupModel[] = []
  flag: boolean=false;
  groupMemberText = {
    text: 'MY GROUPS'
  }
  moreText = {
    text: '+32 more'
  }

  setSearchString(searchTerm: String){
    this.searchString = searchTerm
    if(this.searchString.length>0)
    {
      this.flag=true
    }
    this.count=this.groupComponents.length
    this.filteredGroups = this.filterGroups()
  }
  showMore() {
    console.log('showMore called');    
    this.count=this.groupComponents.length
    this.filteredGroups = this.filterGroups()
    this.flag = true
  }

  filterGroups():GroupModel[] {
    return this.groupComponents
      .filter((groupComponent => groupComponent.title.toLowerCase().includes(this.searchString.toLowerCase()))).splice(0, this.count)
  }

  constructor() { this.filteredGroups = this.groupComponents}

  ngOnInit(): void {
    this.filteredGroups = this.filterGroups()
    console.log(this.count)
  }

}

class GroupModel{

  constructor(title: String, image: String, members: String){
    this.title = title
    this.image = image
    this.members = members
  }

  title: String
  image: String
  members: String
}